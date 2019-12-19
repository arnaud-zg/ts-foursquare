import { getVenuesSearchAsync } from '../src'
import { tsFoursquare } from '../src/standalone'

describe('tsFoursquare', () => {
  it('should wait end of actions and make a snapshot of store', done => {
    const ts4S = new tsFoursquare({ clientId: '1234', clientSecret: '5678' })

    ts4S
      .dispatchActionsAsync({
        actionsDispatch: [
          getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' }),
        ],
        actionCreatorsResolve: [
          getVenuesSearchAsync.cancel,
          getVenuesSearchAsync.failure,
          getVenuesSearchAsync.success,
        ],
      })
      .then(state => {
        expect(state).toMatchSnapshot()
      })
      .catch((error: Error | string) => {
        expect(error).toMatchSnapshot()
      })
      .finally(() => {
        done()
      })
  })
})
