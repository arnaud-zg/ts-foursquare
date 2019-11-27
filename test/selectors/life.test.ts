import { initialState } from '../../src/reducers/app'
import {
  lifeAccessTokenSelector,
  lifeCredentialsSelector,
  lifeSelector,
  lifeStatusSelector,
  lifeOAuth2UrlSelector,
} from '../../src/selectors/life'
import { NStore } from '../../types'

const state: NStore.IState = {
  ...initialState,
  life: {
    status: true,
    credentials: {
      accessToken: '9123',
      clientId: '1234',
      clientSecret: '5678',
      redirectUri: 'https://arnaud-zg.github.io/ts-foursquare-playground/code',
    },
  },
}

describe('selectors/life', () => {
  it('should get life state', () => {
    expect(lifeSelector(state)).toMatchSnapshot()
  })

  it('should get life status', () => {
    expect(lifeStatusSelector(state)).toMatchSnapshot()
  })

  it('should get lifeCredentialsSelector', () => {
    expect(lifeCredentialsSelector(state)).toMatchSnapshot()
  })

  it('should get lifeAccessTokenSelector', () => {
    expect(lifeAccessTokenSelector(state)).toMatchSnapshot()
  })

  it('should get lifeOAuth2UrlSelector', () => {
    expect(lifeOAuth2UrlSelector(state)).toMatchSnapshot()
  })
})
