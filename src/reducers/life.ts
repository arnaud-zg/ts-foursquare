import { createReducer } from 'typesafe-actions'
import { NLifeState } from '../../types'
import { putCredentials, TLifeAction } from '../actions'

export const initialState: NLifeState.IState = {
  status: false,
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLifeState.IState, TLifeAction>(
  initialState
).handleAction(
  putCredentials,
  (state, action): NLifeState.IState => ({
    ...state,
    status: true,
    credentials: {
      ...action.payload,
    },
  })
)
