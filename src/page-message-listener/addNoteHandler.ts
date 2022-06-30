import { logger } from "../logger";
import { AddNoteResponseMessage } from "../messages";

export function addNoteHandler(message: AddNoteResponseMessage) {
  if (message.payload.error !== null) {
    logger.error(message.payload.error);
    alert(`Error adding note. Is Anki running?`)
  } else {
    logger.info("Note added");
  }
}
