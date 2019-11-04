export declare namespace NStatusState {
  interface IModuleState {
    hasError: boolean
    isCancelled: boolean
    isLoading: boolean
  }

  interface IState {
    [actionType: string]: IModuleState
  }
}
