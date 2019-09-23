import { action, ActionType } from 'typesafe-actions'
import { NResolve } from '../../types/resolve'

export enum ELifeAction {
  PUT_CREDENTIALS = 'PUT_CREDENTIALS',
}

export const putCredentials = (payload: NResolve.ICredentialsPayload) =>
  action(ELifeAction.PUT_CREDENTIALS, payload)

export const lifeActions = {
  putCredentials,
}

export type TLifeAction = ActionType<typeof lifeActions>
