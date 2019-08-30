import { createReducer } from 'typesafe-actions'
import { NLife } from '../../types/life'
import { ELifeAction, TLifeAction } from '../actions/life'

export const initialState: NLife.IState = {
  life: false,
  credentials: {
    clientId: '',
    clientSecret: '',
  },
}

export const lifeReducer = createReducer<NLife.IState, TLifeAction>(
  initialState,
  {
    [ELifeAction.RESOLVE_PUT_CREDENTIALS]: (state, action): NLife.IState => ({
      ...state,
      credentials: {
        ...action.payload,
      },
    }),
  }
)
