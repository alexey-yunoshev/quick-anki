export interface AnkiResponseSuccess<Result> {
  result: Result,
  error: null
}

export interface AnkiResponseFail {
  result: null,
  error: string
}

export type AnkiResponse<Result = number> = AnkiResponseSuccess<Result> | AnkiResponseFail;