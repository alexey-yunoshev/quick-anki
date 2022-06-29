import { addNote } from "../anki/addNote";
import { logger } from "../logger";
import { AddNoteMessage, AddNoteResponseMessage, MessageType } from "../messages";

export async function addNoteHandler(message: AddNoteMessage) {
  const body = await addNote(message.payload);
  
  if (body.error !== null) {
    logger.error(body.error);
  }
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs)=> {
    const [tab] = tabs;
    if (tab === undefined) {
      return;
    }
  
    const tabId = tab.id;
    if (tabId === undefined) {
      return;
    }
  
    chrome.tabs.sendMessage(tabId, {
      type: MessageType.addNoteResponse,
      payload: body,
    } as AddNoteResponseMessage);  
  });
}
  