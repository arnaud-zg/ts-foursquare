import { getVenuesSearchAsync, venuesEntitiesSelector } from '../src'
import { tsFoursquare } from '../src/standalone'
import { NStore, NVenue } from '../types'

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
      .then((state: NStore.IState) => {
        expect(state).toMatchSnapshot()
        return venuesEntitiesSelector(state)
      })
      .then((entities: { [key: string]: NVenue.IVenue }) => {
        expect(entities).toMatchSnapshot()
        return entities
      })
      .catch((error: Error | string) => {
        expect(error).toMatchSnapshot()
      })
      .finally(() => {
        done()
      })
  })
})
