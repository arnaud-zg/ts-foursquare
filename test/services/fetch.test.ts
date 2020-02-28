import { getDefaultRequestParameters } from '../../src/services/fetch'
import { EReturnType } from '../../src/standalone'

describe('utils/fetch/getDefaultRequestParameters', () => {
  it('should get default request parameters', () => {
    const config = {
      clientId: '123',
      clientSecret: '456',
      returnType: EReturnType.PROMISE,
    }

    expect(getDefaultRequestParameters({ config })).toMatchSnapshot()
  })
  it('should get default logged request parameters', () => {
    const config = {
      accessToken: '789',
      clientId: '123',
      clientSecret: '456',
      returnType: EReturnType.PROMISE,
    }

    expect(getDefaultRequestParameters({ config })).toMatchSnapshot()
  })
})
