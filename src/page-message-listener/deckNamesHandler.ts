import { makeAnkiDeckPicker } from "../components/ankiDeckPicker";
import { logger } from "../logger";
import { DeckNamesResponseMessage } from "../messages";

export interface DeckPickerLocation {
  selector: string,
  insertPosition: InsertPosition,
}

export function deckNamesHandler(message: DeckNamesResponseMessage, deckPickerLocation: DeckPickerLocation) {
  if (message.payload.error !== null) {
    return logger.error({
      name: "MessageType.deckNamesResponse Error",
      value: message.payload.error,
    });
  }

  const deckNames = message.payload.result;
  logger.info({
    name: "deck names",
    value: message.payload.result,
  });

  if (deckNames.length === 0) {
    return alert("Please create at least one Deck in Anki to use Quick Anki.");
  }
  const deckPicker = makeAnkiDeckPicker({
    deckNames,
  });

  const deckPickerContainer = document.querySelector(deckPickerLocation.selector);
  return deckPickerContainer?.insertAdjacentElement(deckPickerLocation.insertPosition, deckPicker);
}
