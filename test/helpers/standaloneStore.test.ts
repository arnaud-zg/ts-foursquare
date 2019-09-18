import { StandaloneStore } from '../../src/helpers/standaloneStore'
import { configureStore } from '../../src/reducers'
import { putCredentials, ELifeAction } from '../../src/actions/life'

describe('helpers/StandaloneStore', () => {
  it(`should make a snapshot of store after of action:`, done => {
    const store = configureStore()
    const standaloneStore = new StandaloneStore({ store })

    standaloneStore.subscribe((action, state) => {
      expect(state).toMatchSnapshot()

      if (action.type === ELifeAction.PUT_CREDENTIALS) {
        done()
      }
    })

    standaloneStore.dispatchAction(
      putCredentials({
        clientId: '123',
        clientSecret: '123',
      })
    )
  })
})
