import { makeAddToAnkiButton } from "../components/addToAnkiButton";
// import { logger } from "../logger";
import { DeckNamesMessage, MessageType, Messsage } from "../messages";
import pino from "pino";
import { logger } from "../logger";



let attempt = 0;
let attemptLimit = 100;
let deckNames: Array<string> = [];

export function updateWikislownikArticle(
): void {
    const translationElements = Array.from<HTMLLIElement>(document.querySelectorAll('div.mw-parser-output > ul > li.fldt-tlumaczenia'));

    attempt += 1;
    if (attempt === attemptLimit) {

        logger.info({
            message: 'Reached attempt limit',
            translationElements,
            deckNames
        });
        return;
    }
    logger.info({
        message: `Waiting for translation container: ${attempt} ...`,
    });


    if (translationElements.length === 0) {
        window.requestAnimationFrame(updateWikislownikArticle);
    } else {
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

            const ankiButton = makeAddToAnkiButton({
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
                        logger.error({
                            name: 'MessageType.deckNamesResponse Error',
                            value: message.payload.error,
                        });
                    } else {
                        deckNames = message.payload.result;
                        logger.info({
                            name: 'deck names',
                            value: message.payload.result,
                        });

                        if (deckNames.length === 0) {
                            alert('Please create at least one Deck in Anki to use Quick Anki.')
                        }
                        const deckKey = 'quick_anki_deck';
                        let initialSelectedDeck = localStorage.getItem(deckKey) || deckNames[0];
                        logger.info({
                            name: 'initialSelectedDeck',
                            value: initialSelectedDeck,
                        });

                        if (!deckNames.includes(initialSelectedDeck)) {
                            logger.info(`Anki deck "${initialSelectedDeck}" not found. Deleting...`);
                            localStorage.removeItem(deckKey)
                            initialSelectedDeck = deckNames[0];
                        }

                        const ankiDeckPicker = document.createElement('div');
                        ankiDeckPicker.style.marginTop = '1em';
                        ankiDeckPicker.style.marginBottom = '1em';

                        const label = document.createElement('label');
                        label.innerText = 'Anki Deck';
                        label.setAttribute('for', 'ankidecks');
                        ankiDeckPicker.insertAdjacentElement('beforeend', label);
                        label.style.marginRight = '1em';


                        const select = document.createElement('select');
                        select.setAttribute('name', 'ankidecks');
                        select.setAttribute('id', 'ankidecks');
                        select.onchange = (event) => {
                            localStorage.setItem(deckKey, (event.target as HTMLSelectElement).value);
                        };

                        for (const deck of message.payload.result) {
                            const option = document.createElement('option');
                            option.setAttribute('value', deck);

                            if (deck === initialSelectedDeck) {
                                option.setAttribute('selected', 'selected');
                            }
                            option.innerText = deck;
                            select.insertAdjacentElement('beforeend', option);
                        }
                        ankiDeckPicker.insertAdjacentElement('beforeend', select);

                        const translationsContainer = document.querySelector('div.mw-parser-output > ul');
                        translationsContainer?.insertAdjacentElement('afterbegin', ankiDeckPicker);
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
