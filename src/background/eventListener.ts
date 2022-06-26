
import { logger } from "../logger";
import { MessageType, Messsage } from "../messages";
import { addNoteHandler } from "./addNoteHandler";
import { deckNamesHandler } from "./deckNamesHandler";


chrome.runtime.onMessage.addListener(async (message: Messsage) => {
  switch (message.type) {
    case MessageType.addNote: {
      addNoteHandler(message);
      break;
    }
    case MessageType.deckNames: {
      deckNamesHandler(message);
      break;
    }
    default:
      logger.error(message, `Unexpected message type: ${message.type}`);
  }
});
