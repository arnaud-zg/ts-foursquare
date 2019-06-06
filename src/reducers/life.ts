import { NAction } from '../../types/action'
import { NLife } from '../../types/life'
import { EActionRequest } from '../actions/life'

export const initialState = {
  life: false,
} as NLife.ILife

export const lifeReducer = (action: NAction.IAction) => {
  switch (action.type) {
    case EActionRequest.GET_LIFE:
      return {
        ...initialState,
        ...action.payload,
      }

    default:
      return {
        ...initialState,
      }
  }
}
