import { ELifeActionResolve } from '../../src/actions/life'
import { lifeReducer } from '../../src/reducers/life'

describe('reducers/life', () => {
  test.each`
    scenario                            | state              | action                                                                    | expected
    ${'should get state after $action'} | ${{ life: false }} | ${{ type: ELifeActionResolve.RESOLVE_GET_LIFE, payload: { life: true } }} | ${{ life: true }}
  `('$scenario with action: $action', ({ state, action }) => {
    expect(lifeReducer(state, action)).toMatchSnapshot()
  })
})
