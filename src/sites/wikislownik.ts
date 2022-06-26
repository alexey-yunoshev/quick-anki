import { BasicAddNoteParams } from "../anki/addNote";
import { logger } from "../logger";
import { AddNoteMessage, DeckNamesMessage, MessageType, Messsage } from "../messages";

function makeAnkiButton(
    params: BasicAddNoteParams,
    classes: string[] = [],
): HTMLButtonElement {
    const ankiButton = document.createElement("button");
    ankiButton.innerHTML = "Anki";
    ankiButton.title = "Add note to Anki";
    ankiButton.classList.add("copy-button", ...classes);
    ankiButton.addEventListener("click", () => {
        chrome.runtime.sendMessage({
            payload: params,
            type: MessageType.addNote,
        } as AddNoteMessage);
    });

    return ankiButton;
}

let attempt = 0;
let attemptLimit = 100;
let deckNames: Array<string> = [];

export function updateWikislownikArticle(
): void {
    const translationElements = Array.from<HTMLLIElement>(document.querySelectorAll('div.mw-parser-output > ul > li.fldt-tlumaczenia'));

    attempt += 1;
    if (attempt === attemptLimit) {
        console.log(`translationElements: ${translationElements}`);
        console.log(`deckNames: ${deckNames}`);
        return;
    }
    console.log(`attempt - ${attempt}`)

    // ul elements may have one class or the other
    // const translationElements2 = Array.from<HTMLLIElement>(document.querySelectorAll('ul.fldt-tlumaczenia > li.fldt-tlumaczenia'));
    // translationE2lements1.push(...translationElements2);
    console.log(translationElements);
    // if (translationElements.length === 0 || deckNames.length === 0) {
    if (translationElements.length === 0) {
        window.requestAnimationFrame(updateWikislownikArticle);
    } else {
        // ul elements may both class so have to deduplicate
        // const seen = new Set<string>();
        // const translationElements: Array<HTMLLIElement> = [];

        // for (const element of translationElements) {
        //     const innerText = element.innerText;
        //     if (seen.has(innerText)) {
        //         continue;
        //     } else {
        //         seen.add(innerText);
        //         t    ranslationElements.push(element);
        //     }
        // }
        const heading = document.getElementById("firstHeading");
        if (!heading) {
            return;
        }

        const lemma = heading.innerText;
        const pronunciation = (
            document.querySelectorAll(
                "span[title^=\"To jest wymowa w zapisie IPA; zobacz hasło IPA w Wikipedii\"].lang-pl",
            )[0] as HTMLSpanElement | undefined
        )?.innerText;

        for (const translationElement of translationElements) {
            const translation = (translationElement as HTMLLIElement).innerText.split(':')[1];
            const back = `${pronunciation} ${translation}<br\><br\> http://alexey-yunoshev.github.io/incontext/?q=${lemma}`;

            const ankiButton = makeAnkiButton({
                back,
                // TODO
                deckName: "Polish",
                front: lemma,
            });
            translationElement.insertAdjacentElement('beforeend', ankiButton);
        }

        chrome.runtime.onMessage.addListener(async (message: Messsage) => {
            switch (message.type) {
                case MessageType.addNoteResponse: {
                    if (message.payload.error !== null) {
                        logger.error(message.payload.error);
                    } else {
                        logger.info("Note added");
                    }

                    break;
                }
                case MessageType.deckNamesResponse: {
                    if (message.payload.error !== null) {
                        logger.error(message.payload.error);
                    } else {
                        deckNames = message.payload.result;
                        const translationsContainer = Array.from<HTMLLIElement>(document.querySelectorAll('div.mw-parser-output > ul'));
                        const ankiDeckPicker = new HTMLDivElement();
                        // push label
                        // push deck select
                        // on select update storage
                        console.log('deckNames ,,,,')
                        logger.info(message.payload.result);
                        console.log('deckNames ;;;;')
                    }

                    break;
                }
                default:
                    logger.error(message, `Unexpected message type: ${message.type}`);
            }
        });

        chrome.runtime.sendMessage({
            type: MessageType.deckNames,
        } as DeckNamesMessage);
    }
}
