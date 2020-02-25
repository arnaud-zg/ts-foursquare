import { tsFoursquare } from '../../src/standalone'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
} from '../../src/utils/test'
import { payload as payloadGetVenuesCategories } from './__mocks__/getVenuesCategories.resolve'
import { payload as payloadGetVenuesExplore } from './__mocks__/getVenuesExplore.resolve'
import { payload as payloadGetVenuesLikes } from './__mocks__/getVenuesLikes.resolve'
import { payload as payloadGetVenuesListed } from './__mocks__/getVenuesListed.resolve'
import { payload as payloadGetVenuesNextVenues } from './__mocks__/getVenuesNextVenues.resolve'
import { payload as payloadGetVenuesSearch } from './__mocks__/getVenuesSearch.resolve'
import { payload as payloadGetVenuesSimilar } from './__mocks__/getVenuesSimilar.resolve'
import { payload as payloadGetVenuesSuggestCompletion } from './__mocks__/getVenuesSuggestCompletion.resolve'
import { payload as payloadGetVenuesTrending } from './__mocks__/getVenuesTrending.resolve'
import { TActionsKey } from '../../src/actions'

describe('epics/venues', () => {
  test.each`
    scenario                                                             | actionName                      | payloadRequest                                                                                                                               | payloadResponse
    ${'should get venues by location'}                                   | ${'getVenuesSearch'}            | ${{ ll: '40.7099,-73.9622' }}                                                                                                                | ${payloadGetVenuesSearch}
    ${'should get venues by location with intent match parameter'}       | ${'getVenuesSearch'}            | ${{ intent: 'match', ll: '40.7099,-73.9622' }}                                                                                               | ${payloadGetVenuesSearch}
    ${'should get venues by query'}                                      | ${'getVenuesSearch'}            | ${{ query: 'ShopMart' }}                                                                                                                     | ${payloadGetVenuesSearch}
    ${'should get venues near to a location'}                            | ${'getVenuesSearch'}            | ${{ near: 'Chicago, IL' }}                                                                                                                   | ${payloadGetVenuesSearch}
    ${'should get venues'}                                               | ${'getVenuesSearch'}            | ${{ intent: 'browse', ll: '40.7099,-73.9622', query: 'ShopMart', radius: 500 }}                                                              | ${payloadGetVenuesSearch}
    ${'should get similar venues'}                                       | ${'getVenuesSimilar'}           | ${{ venueId: '49b6e8d2f964a52016531fe3' }}                                                                                                   | ${payloadGetVenuesSimilar}
    ${'should get recommended places by location'}                       | ${'getVenuesExplore'}           | ${{ ll: '40.7099,-73.9622' }}                                                                                                                | ${payloadGetVenuesExplore}
    ${'should get recommended places near to a location'}                | ${'getVenuesExplore'}           | ${{ near: 'Chicago, IL' }}                                                                                                                   | ${payloadGetVenuesExplore}
    ${'should get recommended places by location with custom parameter'} | ${'getVenuesExplore'}           | ${{ friendVisits: 'visited', ll: '40.7099,-73.9622', openNow: 1, price: '0,20', section: 'drinks', sortByDistance: 1, query: 'Bubble Tea' }} | ${payloadGetVenuesExplore}
    ${'should get trending venues by location'}                          | ${'getVenuesTrending'}          | ${{ ll: '40.7099,-73.9622' }}                                                                                                                | ${payloadGetVenuesTrending}
    ${'should get trending venues near to a location'}                   | ${'getVenuesTrending'}          | ${{ near: 'Chicago, IL' }}                                                                                                                   | ${payloadGetVenuesTrending}
    ${'should suggest completion for venues by location'}                | ${'getVenuesSuggestCompletion'} | ${{ ll: '40.7099,-73.9622', query: 'Burger' }}                                                                                               | ${payloadGetVenuesSuggestCompletion}
    ${'should suggest completion for venues near to a location'}         | ${'getVenuesSuggestCompletion'} | ${{ near: 'Chicago, IL', query: 'Burger' }}                                                                                                  | ${payloadGetVenuesSuggestCompletion}
    ${'should get venues likes'}                                         | ${'getVenuesLikes'}             | ${{ venueId: '49b6e8d2f964a52016531fe3' }}                                                                                                   | ${payloadGetVenuesLikes}
    ${'should get venues categories'}                                    | ${'getVenuesCategories'}        | ${undefined}                                                                                                                                 | ${payloadGetVenuesCategories}
    ${'should get venues next venues'}                                   | ${'getVenuesNextVenues'}        | ${{ venueId: '49b6e8d2f964a52016531fe3' }}                                                                                                   | ${payloadGetVenuesNextVenues}
    ${'should get a list that this venue appears on'}                    | ${'getVenuesListed'}            | ${{ venueId: '49b6e8d2f964a52016531fe3' }}                                                                                                   | ${payloadGetVenuesListed}
  `(
    '$scenario',
    async ({
      actionName,
      payloadRequest,
      payloadResponse,
    }: {
      actionName: TActionsKey
      payloadRequest: any
      payloadResponse: any
    }) => {
      mockingFetch({ response: { ...payloadResponse } })

      const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
      const response = await ts4Sq.actions[actionName]({
        payload: payloadRequest,
      })

      expect(response).toMatchSnapshot()
    }
  )
})

describe('epics/venues | error case: no network', () => {
  beforeAll(() => {
    mockingFailingNotFoundFetch()
  })

  test.each`
    scenario                                                     | payloadRequest
    ${'should get venues by location'}                           | ${{ ll: '40.7099,-73.9622' }}
    ${'should get similar venues'}                               | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get recommended places by location'}               | ${{ ll: '40.7099,-73.9622' }}
    ${'should get trending venues by location'}                  | ${{ ll: '40.7099,-73.9622' }}
    ${'should suggest completion for venues by location'}        | ${{ ll: '40.7099,-73.9622', query: 'Burger' }}
    ${'should suggest completion for venues near to a location'} | ${{ near: 'Chicago, IL', query: 'Burger' }}
    ${'should get venues likes'}                                 | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get venues categories'}                            | ${undefined}
    ${'should get venues next venues'}                           | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get a list that this venue appears on'}            | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
  `('$scenario', async ({ payloadRequest }) => {
    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    try {
      await ts4Sq.actions.getPhotosDetails({ payload: payloadRequest })
    } catch (error) {
      expect(error).toMatchSnapshot()
    }
  })
})

describe('epics/venues | error case: not valid response', () => {
  beforeAll(() => {
    mockingFailingNotValidFetch()
  })

  test.each`
    scenario                                                     | payloadRequest
    ${'should get venues by location'}                           | ${{ ll: '40.7099,-73.9622' }}
    ${'should get similar venues'}                               | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get recommended places by location'}               | ${{ ll: '40.7099,-73.9622' }}
    ${'should get trending venues by location'}                  | ${{ ll: '40.7099,-73.9622' }}
    ${'should suggest completion for venues by location'}        | ${{ ll: '40.7099,-73.9622', query: 'Burger' }}
    ${'should suggest completion for venues near to a location'} | ${{ near: 'Chicago, IL', query: 'Burger' }}
    ${'should get venues likes'}                                 | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get venues categories'}                            | ${undefined}
    ${'should get venues next venues'}                           | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
    ${'should get a list that this venue appears on'}            | ${{ venueId: '49b6e8d2f964a52016531fe3' }}
  `('$scenario', async ({ payloadRequest }) => {
    const ts4Sq = new tsFoursquare({ clientId: '', clientSecret: '' })
    try {
      await ts4Sq.actions.getPhotosDetails({ payload: payloadRequest })
    } catch (error) {
      expect(error).toMatchSnapshot()
    }
  })
})
