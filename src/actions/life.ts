import { ActionType, action } from 'typesafe-actions'
import { NResolve } from '../../types/resolve'

export enum ELifeAction {
  RESOLVE_GET_LIFE = 'RESOLVE_GET_LIFE',
  RESOLVE_PUT_CREDENTIALS = 'RESOLVE_PUT_CREDENTIALS',
}

export const getLife = () =>
  action(ELifeAction.RESOLVE_GET_LIFE, { life: true })

export const putCredentials = (payload: NResolve.ICredentialsPayload) =>
  action(ELifeAction.RESOLVE_PUT_CREDENTIALS, payload)

const actions = {
  getLife,
  putCredentials,
}

export type TLifeActions = ActionType<typeof actions>
