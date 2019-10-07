import { adaptGetVenuesExplore } from '../../src/adapter/venues'
import { initialState } from '../../src/reducers/app'
import {
  venueCategoriesStateSelector,
  venueLocationSelector,
  venuesCategoriesSelector,
  venueSelector,
  venuesEntitiesSelector,
  venuesRecommendedPlacesSelector,
  venuesSelector,
} from '../../src/selectors/venues'
import { NStore } from '../../types/store'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

const venueId = payloadGetVenuesSearch.response.venues[0].id
const state: NStore.IState = {
  ...initialState,
  venues: {
    ...initialState.venues,
    entities: {
      [venueId]: payloadGetVenuesSearch.response.venues[0],
    },
    recommendedPlaces: adaptGetVenuesExplore(payloadGetVenuesExplore),
    trendingEntities: {},
  },
}

describe('selectors/venues', () => {
  it('should get categories of a venue', () => {
    expect(venueCategoriesStateSelector(state, venueId)).toMatchSnapshot()
  })

  it('should get location of a venue', () => {
    expect(venueLocationSelector(state, venueId)).toMatchSnapshot()
  })

  it('should get a list a of categories', () => {
    expect(venuesCategoriesSelector(state)).toMatchSnapshot()
  })

  it('should get venues', () => {
    expect(venuesSelector(state)).toMatchSnapshot()
  })

  it('should venues entities property', () => {
    expect(Object.keys(venuesEntitiesSelector(state)).length).toEqual(1)
    expect(venuesEntitiesSelector(state)).toMatchSnapshot()
  })

  it('should get a list of recommended places', () => {
    expect(venuesRecommendedPlacesSelector(state)).toMatchSnapshot()
  })

  it('should get a specific venue', () => {
    expect(venueSelector(state, venueId)).toMatchSnapshot()
  })
})
