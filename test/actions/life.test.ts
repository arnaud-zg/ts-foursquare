import { putCredentials } from '../../src/DEPRECATED_actions/life'

describe('actions/life', () => {
  it(`should make a snapshot of putCredentials`, () => {
    expect(putCredentials).toMatchSnapshot()
  })
})
