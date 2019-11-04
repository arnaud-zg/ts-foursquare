import { createAction, ActionType } from 'typesafe-actions'
import { NResolve } from '../../types'

export const putCredentials = createAction('PUT_CREDENTIALS')<
  NResolve.ICredentialsPayload
>()

export const lifeActions = {
  putCredentials,
}

export type TLifeAction = ActionType<typeof lifeActions>
