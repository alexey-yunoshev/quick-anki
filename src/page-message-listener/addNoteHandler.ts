import { logger } from "../logger";
import { AddNoteResponseMessage } from "../messages";

export function addNoteHandler(message: AddNoteResponseMessage) {
  if (message.payload.error !== null) {
    logger.error(message.payload.error);
  } else {
    logger.info("Note added");
  }
}
