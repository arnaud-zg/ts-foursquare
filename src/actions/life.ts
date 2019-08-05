import { NLife } from '../../types/life'
import { lifeReducer } from '../reducers/life'

export enum ELifeActionRequest {
  GET_LIFE = 'GET_LIFE',
}

export const getLife = (): Promise<NLife.ILife> =>
  new Promise(resolve => {
    resolve(
      lifeReducer({
        type: ELifeActionRequest.GET_LIFE,
        payload: {
          life: true,
        },
      })
    )
  })
