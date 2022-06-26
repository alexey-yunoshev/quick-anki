import { deckNames } from "../anki/deckNames";
import { AnkiResponse } from "../anki/response";
import { logger } from "../logger";
import { DeckNamesMessage, DeckNamesResponseMessage, MessageType } from "../messages";

export async function deckNamesHandler(message: DeckNamesMessage) {
    const response = await deckNames();
    const body: AnkiResponse = await response.json();
  
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
        type: MessageType.deckNamesResponse,
        payload: body,
      } as DeckNamesResponseMessage);  
    });
  }
  