export declare namespace NAction {
  interface IActionMeta {
    [key: string]: any
  }

  interface IActionPayload {
    [key: string]: any
  }

  interface IAction {
    meta?: IActionMeta
    payload: IActionPayload | undefined
    type: string
  }

  interface IActionResult {}
}
