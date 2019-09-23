import { actions } from '../../src/actions/life'

describe('actions/life', () => {
  it(`should make a snapshot of actions`, () => {
    expect(actions).toMatchSnapshot()
  })
})
