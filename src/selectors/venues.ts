import { NStore } from '../../types/store'

export const venueCategoriesStateSelector = (
  state: NStore.IState,
  venueId: string
) => venuesEntitiesSelector(state)[venueId].categories

export const venueLocationSelector = (state: NStore.IState, venueId: string) =>
  venuesEntitiesSelector(state)[venueId].location

export const venuesCategoriesSelector = (state: NStore.IState) =>
  venuesSelector(state).categories || []

export const venueSelector = (state: NStore.IState, venueId: string) =>
  venuesEntitiesSelector(state)[venueId]

export const venuesEntitiesSelector = (state: NStore.IState) =>
  venuesSelector(state).entities

export const venuesRecommendedPlacesSelector = (state: NStore.IState) =>
  venuesSelector(state).recommendedPlaces || []

export const venuesSelector = (state: NStore.IState) => state.venues
