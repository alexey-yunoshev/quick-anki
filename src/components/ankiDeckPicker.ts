import { LOCAL_STORAGE_DECK_KEY } from "../constants";
import { logger } from "../logger";

export function makeAnkiDeckPicker({
  deckNames,
}: {
  deckNames: Array<string>,
}) {
  let initialSelectedDeck = localStorage.getItem(LOCAL_STORAGE_DECK_KEY) || deckNames[0];
  localStorage.setItem(LOCAL_STORAGE_DECK_KEY, initialSelectedDeck);

  logger.info({
    name: "initialSelectedDeck",
    value: initialSelectedDeck,
  });

  if (!deckNames.includes(initialSelectedDeck)) {
    logger.info(`Anki deck "${initialSelectedDeck}" not found. Deleting...`);
    localStorage.setItem(LOCAL_STORAGE_DECK_KEY, deckNames[0]);
    [initialSelectedDeck] = deckNames;
  }

  const ankiDeckPicker = document.createElement("div");
  ankiDeckPicker.style.marginTop = "1em";
  ankiDeckPicker.style.marginBottom = "1em";

  const label = document.createElement("label");
  label.innerText = "Anki Deck";
  label.setAttribute("for", "ankidecks");
  ankiDeckPicker.insertAdjacentElement("beforeend", label);
  label.style.marginRight = "1em";


  const select = document.createElement("select");
  select.setAttribute("name", "ankidecks");
  select.setAttribute("id", "ankidecks");
  select.onchange = (event) => {
    localStorage.setItem(LOCAL_STORAGE_DECK_KEY, (event.target as HTMLSelectElement).value);
  };

  for (const deck of deckNames) {
    const option = document.createElement("option");
    option.setAttribute("value", deck);

    if (deck === initialSelectedDeck) {
      option.setAttribute("selected", "selected");
    }
    option.innerText = deck;
    select.insertAdjacentElement("beforeend", option);
  }
  ankiDeckPicker.insertAdjacentElement("beforeend", select);

  return ankiDeckPicker;
}
