import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { NRequest, NResolve } from '../../types'
import { adaptGetAccessToken } from '../adapter'

export const setOAuth2 = createAction('SET_OAUTH2')<NResolve.IOAuth2>()

export const getAccessTokenAsync = createAsyncAction(
  'GET_ACCESS_TOKEN_REQUEST',
  'GET_ACCESS_TOKEN_SUCCESS',
  'GET_ACCESS_TOKEN_FAILURE',
  'GET_ACCESS_TOKEN_CANCEL'
)<
  NRequest.IOAuth2AccessTokenPayload,
  ReturnType<typeof adaptGetAccessToken>,
  Error,
  string
>()

export const putCredentials = createAction('PUT_CREDENTIALS')<
  NResolve.ICredentialsPayload
>()

export const lifeActions = {
  setOAuth2,
  getAccessTokenAsync,
  putCredentials,
}

export type TLifeAction = ActionType<typeof lifeActions>
