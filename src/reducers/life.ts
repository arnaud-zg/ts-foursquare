import { createReducer } from 'typesafe-actions'
import { NLifeState } from '../../types'
import { putAccessToken, putCredentials, TLifeAction } from '../actions'

export const initialState: NLifeState.IState = {
  status: false,
  credentials: {
    accessToken: '',
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLifeState.IState, TLifeAction>(
  initialState
)
  .handleAction(
    putAccessToken,
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
