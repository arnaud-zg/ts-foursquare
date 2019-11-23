export declare namespace NLifeState {
  interface ICredentials {
    accessToken: string
    clientId: string
    clientSecret: string
  }

  interface IState {
    credentials: ICredentials
    status: boolean
  }
}
