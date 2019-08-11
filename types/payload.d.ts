export declare namespace NPayload {
  interface IPayload<TResponse> {
    meta: {
      code: number
      requestId: string
    }
    response: {
      [key: string]: TResponse
    }
  }
}
