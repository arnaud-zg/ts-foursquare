import { getLife, ELifeActionResolve } from '../../src/actions/life'

describe('Life', () => {
  it(`should return an action with type ${ELifeActionResolve.RESOLVE_GET_LIFE}`, () => {
    expect(getLife()).toMatchSnapshot()
  })
})
