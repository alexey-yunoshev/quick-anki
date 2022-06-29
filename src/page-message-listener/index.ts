import { logger } from "../logger";
import { DeckNamesMessage, MessageType, Messsage } from "../messages";
import { addNoteHandler } from "./addNoteHandler";
import { deckNamesHandler, DeckPickerLocation } from "./deckNamesHandler";

export function registerMessageListener({
  deckPickerLocation,
}: {
  deckPickerLocation: DeckPickerLocation,
}) {
  chrome.runtime.onMessage.addListener(async (message: Messsage) => {
    switch (message.type) {
      case MessageType.addNoteResponse: {
        return addNoteHandler(message);
      }
      case MessageType.deckNamesResponse: {
        return deckNamesHandler(message, deckPickerLocation);
      }
      default: {
        return logger.error(message, `Unexpected message type: ${message.type}`);
      }
    }
  });

  chrome.runtime.sendMessage({
    type: MessageType.deckNames,
  } as DeckNamesMessage);
}
