import { Action } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/DEPRECATED_actions'
import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { getVenuesSearchEpic } from '../../src/DEPRECATED_epics/venues'
import { initialState } from '../../src/DEPRECATED_reducers/app'
import { mockingFetch, testEpic } from '../../src/utils/test'
import { payload } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

describe('utils/test/mockingFetch', () => {
  beforeAll(() => {
    const data = {
      text: 'Hello World',
    }

    mockingFetch({ response: { ...data } })
  })

  const fetchResult = () => fetch('https://api.tld.com/v2/randomEndpoint')

  it('should get a promise', () => {
    expect(fetchResult()).toMatchSnapshot()
    mockingFetch()
    expect(fetchResult()).toMatchSnapshot()
  })

  it('should get a success Response object', async () => {
    const response = await fetchResult()
    expect(response).toMatchSnapshot()
  })

  it('should get response', async () => {
    const response = await fetchResult()
    const data = await response.json()
    expect(data).toEqual({
      ...data,
    })
  })
})

describe('utils/test/testEpic', () => {
  beforeAll(() => {
    mockingFetch({ response: { ...payload } })
  })
  const action = getVenuesSearchAsync.request({ query: 'Steak house' })
  const expectedActions = [
    getVenuesSearchAsync.success(adaptGetVenuesSearch(payload)),
  ]

  test.each`
    action    | state           | expectedActions
    ${action} | ${initialState} | ${expectedActions}
    ${action} | ${undefined}    | ${expectedActions}
  `(
    'should get search for venues by location with state: $state',
    ({ action, expectedActions, state, done }) => {
      testEpic(
        getVenuesSearchEpic,
        expectedActions.length,
        action,
        (actions: Action[]) => {
          expect(actions).toMatchSnapshot()
          actions.forEach((actualAction, index) => {
            expect(actualAction).toEqual(expectedActions[index])
          })
          done()
        },
        state
      )
    }
  )
})
