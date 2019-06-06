import { NAction } from '../../types/action'
import { NLife } from '../../types/life'
import { lifeReducer } from '../reducers/life'

export enum EActionRequest {
  GET_LIFE = 'GET_LIFE',
}

export const getLife = (meta: NAction.IActionMeta): Promise<NLife.ILife> =>
  new Promise(resolve => {
    resolve(
      lifeReducer({
        meta,
        type: EActionRequest.GET_LIFE,
        payload: {
          life: true,
        },
      })
    )
  })
