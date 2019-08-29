import { mockingFetch, testEpic } from '../../src/utils/test'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'
import { EVenuesAction, requestGetVenuesSearch } from '../../src/actions'
import { Action } from 'typesafe-actions'
import { initialState } from '../../src/reducers/app'

const data = {
  text: 'Hello World',
}

describe('utils/test/mockingFetch', () => {
  mockingFetch({
    response: {
      ...data,
    },
  })

  const fetchResult = fetch('https://api.tld.com/v2/randomEndpoint')

  it('should get a promise', () => {
    expect(fetchResult).toMatchSnapshot()
  })

  it('should get a success Response object', async () => {
    const response = await fetchResult
    expect(response).toMatchSnapshot()
  })

  it('should get response', async () => {
    const response = await fetchResult
    const data = await response.json()
    expect(data).toEqual({
      ...data,
    })
  })
})

describe('utils/test/testEpic', () => {
  it('should test successfully an epic', done => {
    const expectedActions = [
      {
        payload: payload.response.venues,
        type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH,
      },
    ]
    testEpic(
      getVenuesSearchEpic,
      expectedActions.length,
      requestGetVenuesSearch({ ll: '40.7099,-73.9622' }),
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        actions.map((actualAction, index) => {
          expect(actualAction).toEqual(actions[index])
        })
        done()
      },
      initialState
    )
  })
})
