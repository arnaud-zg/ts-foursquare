import { NAction } from '../../types/action'
import { NLife } from '../../types/life'
import { EActionRequest } from 'actions/life'

export const initialState: NLife.ILife = {
  life: false,
}

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
