import { LemmasByLevel } from "../types";

export function insertlemmasLinksByLevel(
    lemmas: LemmasByLevel,
    location: {
        selector: string,
        insertPosition: InsertPosition,
    },
) {
    if (lemmas.size > 0) {
        const buttons: Array<HTMLButtonElement> = [];

        for (const [level, urls] of Array.from(lemmas.entries()).sort(([level1], [level2]) => level1.localeCompare(level2))) {
            const openUrlsButton: HTMLButtonElement = document.createElement("button");
            openUrlsButton.innerText = `Open all ${level} level lemmas`;

            openUrlsButton.addEventListener("click", () => {
                for (const { url } of urls) {
                    window.open(url, "_blank");
                }
            });

            buttons.push(openUrlsButton);
        }

        const buttonsContainer = document.createElement("div");
        buttonsContainer.replaceChildren(...buttons);
        buttonsContainer.classList.add("root_links_container", "ml-25");
        const container = document.querySelector(location.selector);
        container?.insertAdjacentElement(location.insertPosition, buttonsContainer);
    }
