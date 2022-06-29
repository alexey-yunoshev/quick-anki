import { logger } from "../logger";
import { ActionType } from "./actions";
import { AnkiResponse } from "./response";

export interface InvokeActionParams {
  action: ActionType,
  params?: object,
}

export async function invokeAction(params: InvokeActionParams): Promise<AnkiResponse> {
  const body = JSON.stringify({
    ...params,
    version: 6,
  });

  try {
    const response = await fetch("http://127.0.0.1:8765", {
      method: "POST",
      body,
    });

    return await response.json();
  } catch (error) {
    logger.error(error);
    return {
      error: (error as Error).message,
      result: null,
    };
  }
}
