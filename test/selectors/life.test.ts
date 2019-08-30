import { initialState } from '../../src/reducers/app'
import { lifeSelector, credentialsSelector } from '../../src/selectors/life'

const state = {
  ...initialState,
  life: {
    status: true,
    credentials: {
      clientId: '1234',
      clientSecret: '5678',
    },
  },
}

describe('selectors/life', () => {
  it('should get life status', () => {
    expect(lifeSelector(state)).toMatchSnapshot()
  })

  it('should get credentialsSelector', () => {
    expect(credentialsSelector(state)).toMatchSnapshot()
  })
})
