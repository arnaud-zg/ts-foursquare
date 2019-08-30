import { ELifeAction } from '../../src/actions/life'

describe('actions/life', () => {
  it(`should make a snapshot of ELifeAction`, () => {
    expect(ELifeAction).toMatchSnapshot()
  })
})
