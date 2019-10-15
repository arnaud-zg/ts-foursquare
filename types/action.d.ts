declare namespace NAction {
  interface IActionMeta {
    [key: string]: any
  }

  interface IActionPayload {
    [key: string]: any
  }

  interface IAction {
    meta?: IActionMeta
    payload: IActionPayload
    type: string
  }
}
