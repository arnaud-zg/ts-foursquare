import { NRoot } from '../../types/root.d'

export const venuesSelector = (state: NRoot.IState) => state.venues.entities

export const venueSelector = (state: NRoot.IState, venueId: string) =>
  venuesSelector(state)[venueId]

export const venueCategoriesStateSelector = (
  state: NRoot.IState,
  venueId: string
) => venuesSelector(state)[venueId].categories

export const venueLocationSelector = (state: NRoot.IState, venueId: string) =>
  venuesSelector(state)[venueId].location
