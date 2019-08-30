import { ActionType, action } from 'typesafe-actions'
import { NResolve } from '../../types/resolve'

export enum ELifeAction {
  RESOLVE_PUT_CREDENTIALS = 'RESOLVE_PUT_CREDENTIALS',
}

export const putCredentials = (payload: NResolve.ICredentialsPayload) =>
  action(ELifeAction.RESOLVE_PUT_CREDENTIALS, payload)

const actions = {
  putCredentials,
}

export type TLifeAction = ActionType<typeof actions>
