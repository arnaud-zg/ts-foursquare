import { Action } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/actions'
import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { initialState } from '../../src/reducers/app'
import { mockingFetch, testEpic } from '../../src/utils/test'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

describe('utils/test/mockingFetch', () => {
  beforeAll(() => {
    const data = {
      text: 'Hello World',
    }

    mockingFetch({
      response: { ...data },
    })
  })

  const fetchResult = () => fetch('https://api.tld.com/v2/randomEndpoint')

  it('should get a promise', () => {
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
    scenario                                      | action    | expectedActions
    ${'should get search for venues by location'} | ${action} | ${expectedActions}
  `('$scenario', ({ action, expectedActions, done }) => {
    testEpic(
      getVenuesSearchEpic,
      expectedActions.length,
      action,
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        actions.map((actualAction, index) => {
          expect(actualAction).toEqual(expectedActions[index])
        })
        done()
      },
      initialState
    )
  })
})
