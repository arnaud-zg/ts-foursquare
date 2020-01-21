import {
  putCredentials,
  getAccessTokenAsync,
  setOAuth2,
} from '../../src/DEPRECATED_actions/life'
import { initialState, lifeReducer } from '../../src/DEPRECATED_reducers/life'

describe('reducers/life', () => {
  test.each`
    scenario                                                        | action
    ${'should get state after action: getAccessTokenAsync.request'} | ${getAccessTokenAsync.request({ code: '9123' })}
    ${'should get state after action: getAccessTokenAsync.success'} | ${getAccessTokenAsync.success({ accessToken: '4567' })}
    ${'should get state after action: setOAuth2'}                   | ${setOAuth2({ clientId: '1234', clientSecret: '5678', redirectUri: 'https://arnaud-zg.github.io/ts-foursquare-playground/code' })}
    ${'should get state after action: putCredentials'}              | ${putCredentials({ clientId: '1234', clientSecret: '5678' })}
  `('$scenario with action: $action', ({ action }) => {
    expect(lifeReducer(initialState, action)).toMatchSnapshot()
  })
})
