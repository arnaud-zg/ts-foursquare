import { NLife } from '../../types/life'
import { lifeReducer } from 'reducers/life'

export enum EActionRequest {
  GET_LIFE = 'GET_LIFE',
}

export const getLife = (): Promise<NLife.ILife> =>
  new Promise(resolve => {
    resolve(
      lifeReducer({
        type: EActionRequest.GET_LIFE,
        payload: {
          life: true,
        },
      })
    )
  })
