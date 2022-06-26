import { BasicAddNoteParams } from "./anki/addNote";
import { AnkiResponse } from "./anki/response";

export enum MessageType {
  addNote,
  addNoteResponse,
  deckNames,
  deckNamesResponse,
}

export interface AddNoteMessage {
  type: MessageType.addNote,
  payload: BasicAddNoteParams,
}

export interface AddNoteResponseMessage {
  type: MessageType.addNoteResponse,
  payload: AnkiResponse,
}

export interface DeckNamesMessage {
  type: MessageType.deckNames,
}

export interface DeckNamesResponseMessage {
  type: MessageType.deckNamesResponse,
  payload: AnkiResponse<Array<string>>,
}

export type Messsage =
 | AddNoteMessage
 | AddNoteResponseMessage
 | DeckNamesMessage
 | DeckNamesResponseMessage
;
