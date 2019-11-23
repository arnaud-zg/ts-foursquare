import { putCredentials, putAccessToken } from '../../src/actions/life'
import { initialState, lifeReducer } from '../../src/reducers/life'

describe('reducers/life', () => {
  test.each`
    scenario                                           | action
    ${'should get state after action: putAccessToken'} | ${putAccessToken({ accessToken: '9123' })}
    ${'should get state after action: putCredentials'} | ${putCredentials({ clientId: '1234', clientSecret: '5678' })}
  `('$scenario with action: $action', ({ action }) => {
    expect(lifeReducer(initialState, action)).toMatchSnapshot()
  })
})
