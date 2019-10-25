export declare namespace NRequestState {
  interface IState {
    [actionType: string]: {
      cancelReason?: string
      entityIds: string[]
      error?: Error
    }
  }
}
