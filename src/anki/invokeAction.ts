import { ActionType } from "./actions";

export interface InvokeActionParams {
  action: ActionType,
  params?: object,
}

export function invokeAction(params: InvokeActionParams) {
  const body = JSON.stringify({
    ...params,
    version: 6,
  });
    
  return fetch("http://127.0.0.1:8765", {
    method: "POST",
    body,
  });
}