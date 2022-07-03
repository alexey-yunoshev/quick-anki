import { LemmasByLevel } from "../types";

export function insertlemmasLinksByLevel(
    lemmas: LemmasByLevel,
    location: {
        selector: string,
        insertPosition: InsertPosition,
    },
) {
    if (lemmas.size > 0) {
        const levelContainers: Array<HTMLDivElement> = [];

        const comma = document.createElement('span');
        comma.innerText = ', '


        for (const [level, urls] of Array.from(lemmas.entries()).sort(([level1], [level2]) => level1.localeCompare(level2))) {
            const levelContainer: HTMLDivElement = document.createElement("div");
            const title: HTMLSpanElement = document.createElement("span");
            title.innerText = `${level} level words: `;
            title.style.fontWeight = '600';
            levelContainer.insertAdjacentElement('afterbegin', title);

            let first = true;
            for (const { url, lemma } of urls) {
                if (!first) {
                    levelContainer.insertAdjacentElement('beforeend', comma);
                }
                first = false;
                const anchorElement: HTMLAnchorElement = document.createElement('a');
                anchorElement.href = url;
                anchorElement.innerText = lemma;
                levelContainer.insertAdjacentElement('beforeend', anchorElement);
            }

            levelContainers.push(levelContainer);
        }

        const buttonsContainer = document.createElement("div");
        buttonsContainer.replaceChildren(...levelContainers);
        buttonsContainer.classList.add("root_links_container", "ml-25");
        const container = document.querySelector(location.selector);
        container?.insertAdjacentElement(location.insertPosition, buttonsContainer);
    }
}