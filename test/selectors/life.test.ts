import { initialState } from '../../src/reducers/app'
import {
  credentialsSelector,
  lifeSelector,
  lifeStatusSelector,
} from '../../src/selectors/life'
import { NStore } from '../../types'

const state: NStore.IState = {
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
  it('should get life state', () => {
    expect(lifeSelector(state)).toMatchSnapshot()
  })

  it('should get life status', () => {
    expect(lifeStatusSelector(state)).toMatchSnapshot()
  })

  it('should get credentialsSelector', () => {
    expect(credentialsSelector(state)).toMatchSnapshot()
  })
})
