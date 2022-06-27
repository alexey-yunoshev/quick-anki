import { ActionType } from "./actions";

export interface InvokeActionParams {
  action: ActionType,
  params?: object,
}

export async function invokeAction(params: InvokeActionParams) {
  const body = JSON.stringify({
    ...params,
    version: 6,
  });

  try {
    const response = await fetch("http://127.0.0.1:8765", {
      method: "POST",
      body,
    });

    return response;
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    }
  }
}