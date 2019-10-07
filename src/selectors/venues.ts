import { NStore } from '../../types/store'

export const venuesSelector = (state: NStore.IState) => state.venues

export const venuesEntitiesSelector = (state: NStore.IState) =>
  venuesSelector(state).entities

export const venuesRecommendedPlacesSelector = (state: NStore.IState) => {
  return venuesSelector(state).recommendedPlaces || []
}

export const venueSelector = (state: NStore.IState, venueId: string) =>
  venuesEntitiesSelector(state)[venueId]

export const venueCategoriesStateSelector = (
  state: NStore.IState,
  venueId: string
) => venuesEntitiesSelector(state)[venueId].categories

export const venueLocationSelector = (state: NStore.IState, venueId: string) =>
  venuesEntitiesSelector(state)[venueId].location
