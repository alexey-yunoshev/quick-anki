import { makeAddToAnkiButton } from "../components/addToAnkiButton";
import { registerMessageListener } from "../page-message-listener";
import { waitForElements } from "../utils/waitForSelector";

export async function updateWikislownikArticle(
): Promise<void> {
  const translationElements = await waitForElements<HTMLLIElement>("div.mw-parser-output > ul > li.fldt-tlumaczenia");

  const heading = document.getElementById("firstHeading");
  if (!heading) {
    return;
  }

  const lemma = heading.innerText;
  const pronunciationElement = document.querySelectorAll(".ipa.lang-pl.fldt-wymowa")[0] as HTMLSpanElement | undefined;
  const pronunciation = pronunciationElement?.innerText;

  for (const translationElement of translationElements) {
    const translation = (translationElement as HTMLLIElement).innerText.split(":")[1];
    // eslint-disable-next-line no-useless-escape
    const back = `${pronunciation} ${translation}<br\><br\> <a href="http://alexey-yunoshev.github.io/incontext/?q=${lemma}">inContext</a> <br\><br\> <a href="https://pl.wiktionary.org/wiki/${lemma}">Wikisłownik</a>`;

    const ankiButton = makeAddToAnkiButton({
      back,
      front: lemma,
    });
    translationElement.insertAdjacentElement("beforeend", ankiButton);
  }

  registerMessageListener({
    deckPickerLocation: {
      insertPosition: "afterbegin",
      selector: "div.mw-parser-output > ul",
    },
  });
}
