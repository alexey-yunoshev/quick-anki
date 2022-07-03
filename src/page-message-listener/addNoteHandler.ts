import { LOCAL_STORAGE_DECK_KEY } from "../constants";
import { logger } from "../logger";
import { AddNoteResponseMessage } from "../messages";

export function addNoteHandler(message: AddNoteResponseMessage) {
  const error = message.payload.error;
  if (error !== null) {
    logger.error(message.payload.error);
    if (error === 'cannot create note because it is a duplicate') {
      alert(`Deck "${localStorage.getItem(LOCAL_STORAGE_DECK_KEY)}" already has this note.`)
    } else if (error === "Failed to fetch") {
      alert(`Failed to connect to Anki. Is it running? If so, do you have Anki Connect addon installed? See https://ankiweb.net/shared/info/2055492159`)
    } else {
      alert(`Unexpected error: ${error}`)
    }
  } else {
    logger.info("Note added");
  }
}
