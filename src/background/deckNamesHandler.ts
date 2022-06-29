import { deckNames } from "../anki/deckNames";
import { logger } from "../logger";
import { DeckNamesResponseMessage, MessageType } from "../messages";

export async function deckNamesHandler() {
  const body = await deckNames();
  
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
  