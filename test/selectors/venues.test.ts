import { initialState } from '../../src/reducers/app'
import {
  venueCategoriesStateSelector,
  venueLocationSelector,
  venuesCategoriesSelector,
  venueSelector,
  venuesSelector,
} from '../../src/selectors/venues'
import { NStore } from '../../types/store'
import { payload } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

const venueId = payload.response.venues[0].id
const state: NStore.IState = {
  ...initialState,
  venues: {
    ...initialState.venues,
    entities: {
      [venueId]: payload.response.venues[0],
    },
  },
}

describe('selectors/venues', () => {
  it('should get venues', () => {
    expect(Object.keys(venuesSelector(state)).length).toEqual(1)
    expect(venuesSelector(state)).toMatchSnapshot()
  })

  it('should get a list a of categories', () => {
    expect(venuesCategoriesSelector(state)).toMatchSnapshot()
  })

  it('should get a specific venue', () => {
    expect(venueSelector(state, venueId)).toMatchSnapshot()
  })

  it('should get categories of a venue', () => {
    expect(venueCategoriesStateSelector(state, venueId)).toMatchSnapshot()
  })

  it('should get location of a venue', () => {
    expect(venueLocationSelector(state, venueId)).toMatchSnapshot()
  })
})
