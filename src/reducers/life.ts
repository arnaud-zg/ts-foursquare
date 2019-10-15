import { createReducer, getType } from 'typesafe-actions'
import { NLife } from '../../types/lifeState.d'
import { TLifeAction, putCredentials } from '../actions/life'

export const initialState: NLife.IState = {
  status: false,
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLife.IState, TLifeAction>(
  initialState
).handleAction(
  getType(putCredentials),
  (state, action): NLife.IState => ({
    ...state,
    status: true,
    credentials: {
      ...action.payload,
    },
  })
)
