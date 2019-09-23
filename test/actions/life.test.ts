import { putCredentials } from '../../src/actions/life'

describe('actions/life', () => {
  it(`should make a snapshot of putCredentials`, () => {
    expect(putCredentials).toMatchSnapshot()
  })
})
