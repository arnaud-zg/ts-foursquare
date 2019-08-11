import { createReducer } from 'typesafe-actions'
import { NLife } from '../../types/life'
import { ELifeActionResolve, TLifeActions } from '../actions/life'

export const initialState: NLife.IState = {
  life: false,
}

export const lifeReducer = createReducer<NLife.IState, TLifeActions>(
  initialState,
  {
    [ELifeActionResolve.RESOLVE_GET_LIFE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  }
)
