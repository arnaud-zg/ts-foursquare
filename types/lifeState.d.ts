declare namespace NLife {
  interface ICredentials {
    clientId: string
    clientSecret: string
  }

  interface IState {
    credentials: ICredentials
    status: boolean
  }
}
