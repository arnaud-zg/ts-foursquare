import {
  venueLocationSelector,
  venueCategoriesStateSelector,
  venueSelector,
  venuesSelector,
} from '../../src/selectors/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'
import { initialState } from '../../src/reducers/index'

const venueId = payload.response.venues[0].id
const state = {
  ...initialState,
  venues: {
    entities: {
      [venueId]: payload.response.venues[0],
    },
  },
}

describe('selectors/venues', () => {
  it('should get venues', () => {
    expect(Object.keys(venuesSelector(state)).length).toEqual(1)
  })

  it('should get a specific venue', () => {
    expect(venueSelector(state, venueId)).toEqual(
      state.venues.entities[venueId]
    )
  })

  it('should get categories of a venue', () => {
    expect(venueCategoriesStateSelector(state, venueId)).toEqual(
      state.venues.entities[venueId].categories
    )
  })

  it('should get location of a venue', () => {
    expect(venueLocationSelector(state, venueId)).toEqual(
      state.venues.entities[venueId].location
    )
  })
})
