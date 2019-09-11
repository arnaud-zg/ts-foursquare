import { createReducer } from 'typesafe-actions'
import { NLife } from '../../types/lifeState'
import { ELifeAction, TLifeAction } from '../actions/life'

export const initialState: NLife.IState = {
  status: false,
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLife.IState, TLifeAction>(
  initialState,
  {
    [ELifeAction.PUT_CREDENTIALS]: (state, action): NLife.IState => ({
      ...state,
      status: true,
      credentials: {
        ...action.payload,
      },
    }),
  }
)
