import { getLife, ELifeAction } from '../../src/actions/life'

describe('Life', () => {
  it(`should make a snapshot of ELifeAction`, () => {
    expect(ELifeAction).toMatchSnapshot()
  })

  it(`should return an action with type ${ELifeAction.RESOLVE_GET_LIFE}`, () => {
    expect(getLife()).toMatchSnapshot()
  })
})
