import { createReducer } from 'typesafe-actions'
import { NLifeState } from '../../types'
import {
  getAccessTokenAsync,
  putCredentials,
  setOAuth2,
  TLifeAction,
} from '../DEPRECATED_actions'

export const initialState: NLifeState.IState = {
  status: false,
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLifeState.IState, TLifeAction>(
  initialState
)
  .handleAction(
    getAccessTokenAsync.success,
    (state, action): NLifeState.IState => ({
      ...state,
      status: true,
      credentials: {
        ...state.credentials,
        ...action.payload,
      },
    })
  )
  .handleAction(
    setOAuth2,
    (state, action): NLifeState.IState => ({
      ...state,
      status: true,
      credentials: {
        ...state.credentials,
        ...action.payload,
      },
    })
  )
  .handleAction(
    putCredentials,
    (state, action): NLifeState.IState => ({
      ...state,
      status: true,
      credentials: {
        ...state.credentials,
        ...action.payload,
      },
    })
  )
