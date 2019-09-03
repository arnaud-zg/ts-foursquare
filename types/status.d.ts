export declare namespace NStatus {
  interface IModuleState {
    hasError: boolean
    isLoading: boolean
  }

  interface IState {
    [key: string]: IModuleState
  }
}
