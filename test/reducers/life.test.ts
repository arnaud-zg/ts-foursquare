import { ELifeActionRequest } from '../../src/actions/life'
import { lifeReducer } from '../../src/reducers/life'

describe('lifeReducer', () => {
  it('should return default life state', () => {
    expect(
      lifeReducer({
        payload: undefined,
        type: 'UNKNOWN',
      })
    ).toEqual({ life: false })
  })

  it('should return processed life state', () => {
    expect(
      lifeReducer({
        payload: {
          life: true,
        },
        type: ELifeActionRequest.GET_LIFE,
      })
    ).toEqual({ life: true })
  })
})
