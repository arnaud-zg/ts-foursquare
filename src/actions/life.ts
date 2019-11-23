import { ActionType, createAction } from 'typesafe-actions'
import { NResolve } from '../../types'

export const putAccessToken = createAction('PUT_ACCESS_TOKEN')<
  NResolve.IAccessTokenPayload
>()

export const putCredentials = createAction('PUT_CREDENTIALS')<
  NResolve.ICredentialsPayload
>()

export const lifeActions = {
  putAccessToken,
  putCredentials,
}

export type TLifeAction = ActionType<typeof lifeActions>
