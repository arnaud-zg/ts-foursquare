import { initialState } from '../../src/DEPRECATED_reducers'
import { getDefaultRequestParameters } from '../../src/services/fetch'

describe('utils/fetch/getDefaultRequestParameters', () => {
  it('should get default request parameters', () => {
    const config = {
      ...initialState.life.credentials,
      clientId: '123',
      clientSecret: '456',
    }

    expect(getDefaultRequestParameters(config)).toMatchSnapshot()
  })
  it('should get default logged request parameters', () => {
    const config = {
      ...initialState.life.credentials,
      accessToken: '789',
      clientId: '123',
      clientSecret: '456',
    }

    expect(getDefaultRequestParameters(config)).toMatchSnapshot()
  })
})
