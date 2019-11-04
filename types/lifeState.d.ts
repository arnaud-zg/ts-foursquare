export declare namespace NLifeState {
  interface ICredentials {
    clientId: string
    clientSecret: string
  }

  interface IState {
    credentials: ICredentials
    status: boolean
  }
}
