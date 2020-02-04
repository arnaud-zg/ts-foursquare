import { actions, TActions, TActionsValue } from './actions'

export enum EReturnType {
  OBSERVABLE = 'OBSERVABLE',
  PROMISE = 'PROMISE',
}

export interface IStandaloneConfig {
  clientId: string
  clientSecret: string
  accessToken?: string
  returnType?: EReturnType
}

export class tsFoursquare {
  actions: TActions
  clientId: string
  clientSecret: string
  returnType: EReturnType

  constructor({ clientId, clientSecret, returnType }: IStandaloneConfig) {
    this.actions = Object.entries(actions).reduce(
      (acc, actionEntry) => ({
        ...acc,
        [actionEntry[0]]: this.injectContextInAction({
          action: actionEntry[1],
        }),
      }),
      {} as TActions
    )

    this.clientId = clientId
    this.clientSecret = clientSecret
    this.returnType = returnType || EReturnType.PROMISE
  }

  private injectContextInAction = ({ action }: { action: TActionsValue }) => (
    props: any
  ) =>
    action({
      ...props,
      config: {
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        returnType: this.returnType,
      },
    })
}
