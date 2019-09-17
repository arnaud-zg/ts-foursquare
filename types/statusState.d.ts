export declare namespace NStatus {
  interface IModuleState {
    hasError: boolean
    isCancelled: boolean
    isLoading: boolean
  }

  interface IState {
    [key: string]: IModuleState
  }
}
