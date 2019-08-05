import {
  setCredentials,
  getCredentials,
  removeCredentials,
} from '../../src/utils/storage'

describe('getCredentials', () => {
  it('should test get / set / remove credentials', () => {
    const clientId = 'MyClientId'
    const clientSecret = 'MyClientSecret'

    setCredentials({
      clientId,
      clientSecret,
    })
    expect(getCredentials()).toEqual({
      clientId,
      clientSecret,
    })
    removeCredentials()
    expect(getCredentials()).toEqual({})
  })
})
