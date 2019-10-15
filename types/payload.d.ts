declare namespace NPayload {
  interface IPayload<TResponse> {
    meta?: IMeta
    response?: TResponse
  }

  interface IMeta {
    code: number
    requestId: string
  }
}
