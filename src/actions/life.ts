import { createAction, ActionType } from 'typesafe-actions'
import { NResolve } from '../../types/resolve'

export const putCredentials = createAction(
  'PUT_CREDENTIALS',
  action => (payload: NResolve.ICredentialsPayload) => action(payload)
)

const actions = {
  putCredentials,
}

export type TLifeAction = ActionType<typeof actions>
