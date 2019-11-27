import { adaptGetAccessToken } from '../../src/adapter/life'

describe('adapter/life/adaptGetAccessToken', () => {
  it('should get access token', () => {
    expect(adaptGetAccessToken({ access_token: '1234' })).toMatchSnapshot()
  })
})
