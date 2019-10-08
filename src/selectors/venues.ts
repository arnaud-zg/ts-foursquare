import { NStore } from '../../types/store'
import { NVenue } from '../../types/venue'

export const venueCategoriesStateSelector = (
  state: NStore.IState,
  venueId: string
): NVenue.ICategory[] => {
  const venueEntity = venuesEntitiesSelector(state)[venueId]
  return venueEntity ? venueEntity.categories : []
}

export const venueLocationSelector = (
  state: NStore.IState,
  venueId: string
): NVenue.ILocation | null => {
  const venueEntity = venuesEntitiesSelector(state)[venueId]
  return venueEntity ? venueEntity.location : null
}

export const venuesCategoriesSelector = (state: NStore.IState) =>
  venuesSelector(state).categories

export const venueSelector = (state: NStore.IState, venueId: string) =>
  venuesEntitiesSelector(state)[venueId]

export const venuesEntitiesSelector = (state: NStore.IState) =>
  venuesSelector(state).entities

export const venuesSimilarSelector = (state: NStore.IState) =>
  venuesSelector(state).similarVenues

export const venuesRecommendedPlacesSelector = (state: NStore.IState) =>
  venuesSelector(state).recommendedPlaces

export const venuesSelector = (state: NStore.IState) => state.venues
