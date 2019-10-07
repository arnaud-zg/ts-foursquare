import { NStore } from '../../types/store'

export const venuesSelector = (state: NStore.IState) => state.venues.entities

export const venuesCategoriesSelector = (state: NStore.IState) =>
  venuesSelector(state).categories || []

export const venueSelector = (state: NStore.IState, venueId: string) =>
  venuesSelector(state)[venueId]

export const venueCategoriesStateSelector = (
  state: NStore.IState,
  venueId: string
) => venuesSelector(state)[venueId].categories

export const venueLocationSelector = (state: NStore.IState, venueId: string) =>
  venuesSelector(state)[venueId].location
