import { TRootState } from '../reducers'

export const venuesSelector = (state: TRootState) => state.venues

export const venueSelector = (state: TRootState, venueId: string) =>
  venuesSelector(state)[venueId]

export const venueCategoriesStateSelector = (
  state: TRootState,
  venueId: string
) => venuesSelector(state)[venueId].categories

export const venueLocationSelector = (state: TRootState, venueId: string) =>
  venuesSelector(state)[venueId].location
