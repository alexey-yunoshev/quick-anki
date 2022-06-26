import { addNote } from "../anki/addNote";
import { AnkiResponse } from "../anki/response";
import { logger } from "../logger";
import { AddNoteMessage, AddNoteResponseMessage, MessageType } from "../messages";

export async function addNoteHandler(message: AddNoteMessage) {
    const response = await addNote(message.payload);
    const body: AnkiResponse = await response.json();
  
    let notificationMessage = "Note added";
    if (body.error !== null) {
      notificationMessage = body.error;
      logger.error(body.error);
    }
  
    chrome.notifications.create("", {
      message: notificationMessage,
      iconUrl: "images/logo.png",
      title: "Quick Anki",
      type: "basic",
    });
  
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