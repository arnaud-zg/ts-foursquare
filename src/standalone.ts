import { AnyAction } from 'redux'
import { dispatchActionsAndWaitResponse } from 'standalone-store'
import { ActionCreator } from 'typesafe-actions'
import { NStore } from '../types'
import { putCredentials } from './index'
import { configureStore } from './DEPRECATED_reducers'

export class tsFoursquare {
  clientId: string
  clientSecret: string

  constructor({
    clientId,
    clientSecret,
  }: {
    clientId: string
    clientSecret: string
  }) {
    this.clientId = clientId
    this.clientSecret = clientSecret
  }

  dispatchActionsAsync = ({
    actionsDispatch,
    actionCreatorsResolve,
  }: {
    actionsDispatch: AnyAction[]
    actionCreatorsResolve: ActionCreator[]
  }) =>
    dispatchActionsAndWaitResponse<NStore.IState, NStore.IState>({
      actionsDispatch: [
        putCredentials({
          clientId: this.clientId,
          clientSecret: this.clientSecret,
        }),
        ...actionsDispatch,
      ],
      actionCreatorsResolve,
      configureStore,
      selector: state => state,
    })
}
