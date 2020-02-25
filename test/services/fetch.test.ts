import { getDefaultRequestParameters } from '../../src/services/fetch'

describe('utils/fetch/getDefaultRequestParameters', () => {
  it('should get default request parameters', () => {
    const config = {
      clientId: '123',
      clientSecret: '456',
    }

    expect(getDefaultRequestParameters(config)).toMatchSnapshot()
  })
  it('should get default logged request parameters', () => {
    const config = {
      accessToken: '789',
      clientId: '123',
      clientSecret: '456',
    }

    expect(getDefaultRequestParameters(config)).toMatchSnapshot()
  })
})
