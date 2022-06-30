import { makeAddToAnkiButton } from "../components/addToAnkiButton";
import { insertlemmasLinksByLevel } from "../components/insertlemmasLinksByLevel";
import { registerMessageListener } from "../page-message-listener";
import { waitForElements } from "../utils/waitForSelector";

import { getLemmaLevel } from "../data/getLemmaLevel";
import { polishLemmasLevelMap } from "../data/languages/polish";
import { logger } from "../logger";
import { LemmasByLevel } from "../types";

export interface FormatSameRootLemmasOptions {
  showLemmaLevel?: boolean;
  hideRedLinks?: boolean;
}

function isLemmaLink(element: Element): element is HTMLAnchorElement {
  return (
    (element as HTMLAnchorElement).href !== undefined && element.tagName === "A"
  );
}

export function formatSameRootLemmas() {
  const titleElement = document.querySelector("dt.fldt-pokrewne");
  logger.info({
    fn: 'formatSameRootLemmas',
    message: 'titleElement',
    titleElement,
  });
  if (titleElement === null) {
    return;
  }

  const container = titleElement.parentElement;
  logger.info({
    fn: 'formatSameRootLemmas',
    message: 'container',
    container,
  });
  if (container === null) {
    return;
  }
  const sections = document.querySelectorAll("dd.fldt-pokrewne");
  logger.info({
    fn: 'formatSameRootLemmas',
    message: 'sections',
    sections,
  });
  if (sections.length === 0) {
    return;
  }

  const lemmasByLevel: LemmasByLevel = new Map();

  for (const section of sections) {
    for (const child of Array.from(section.children)) {
      if (isLemmaLink(child) && !child.classList.contains("new")) {
        const lemma = child.innerText;
        const lemmaLevel = getLemmaLevel(polishLemmasLevelMap, lemma);

        if (lemmaLevel !== undefined) {
          if (lemmasByLevel.has(lemmaLevel)) {
            lemmasByLevel.get(lemmaLevel)?.push({
              url: child.href,
              lemma,
            });
          } else {
            lemmasByLevel.set(lemmaLevel, [{
              url: child.href,
              lemma,
            }]);
          }
        }
      }
    }
  }

  logger.info({
    fn: 'formatSameRootLemmas',
    message: 'lemmasByLevel',
    lemmasByLevel,
  });

  // if (lemmasByLevel.size > 0) {
  //   const buttons: Array<HTMLButtonElement> = [];

  //   for (const [level, urls] of Array.from(lemmasByLevel.entries()).sort(([level1], [level2]) => level1.localeCompare(level2))) {
  //     const openUrlsButton: HTMLButtonElement = document.createElement("button");
  //     openUrlsButton.innerText = `Open all ${level} level lemmas`;

  //     openUrlsButton.addEventListener("click", () => {
  //       for (const { url } of urls) {
  //         window.open(url, "_blank");
  //       }
  //     });

  //     buttons.push(openUrlsButton);
  //   }

  //   const buttonsContainer = document.createElement("div");
  //   buttonsContainer.replaceChildren(...buttons);
  //   buttonsContainer.classList.add("root_links_container", "ml-25");
  //   titleElement.insertAdjacentElement("afterend", buttonsContainer);

  insertlemmasLinksByLevel(
    lemmasByLevel,
    {
      insertPosition: "afterend",
      selector: "dt.fldt-pokrewne",
    }
  );
}
}


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

  formatSameRootLemmas();

  registerMessageListener({
    deckPickerLocation: {
      insertPosition: "afterbegin",
      selector: "div.mw-parser-output > ul",
    },
  });
}
