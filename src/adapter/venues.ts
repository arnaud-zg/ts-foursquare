import { NLikes } from '../../types/likes'
import { NMiniVenue } from '../../types/miniVenue'
import { NPayload } from '../../types/payload.d'
import { NRecommendedPlaces } from '../../types/recommendedPlaces'
import { NSimilarVenues } from '../../types/similarVenues'
import { NVenue } from '../../types/venue.d'
import { NVenuesCategories } from '../../types/venuesCategories'
import { adaptPayload } from './payload'

export const adaptGetVenuesCategories = (
  payload: NPayload.IPayload<NVenuesCategories.IResponse>
): NVenuesCategories.ICategory[] => {
  const response = adaptPayload<NVenuesCategories.IResponse>(payload)

  return response && !!response.categories && !!response.categories.length
    ? response.categories
    : []
}

export const adaptGetVenuesExplore = (
  payload: NPayload.IPayload<NRecommendedPlaces.IResponse>
): NRecommendedPlaces.IGroupItem[] => {
  const response = adaptPayload<NRecommendedPlaces.IResponse>(payload)

  return response &&
    !!response.groups &&
    !!response.groups.length &&
    !!response.groups[0].items &&
    !!response.groups[0].items.length
    ? response.groups[0].items
    : []
}

export const adapterGetVenuesLikes = (
  payload: NPayload.IPayload<NLikes.IResponse>
): NLikes.ILikes => {
  const response = adaptPayload<NLikes.IResponse>(payload)

  return response && response.likes
    ? response.likes
    : {
        count: 0,
        items: [],
        summary: '0 Likes',
      }
}

export const adaptGetVenuesSearch = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NVenue.IResponse>(payload)

  return !!response && !!response.venues && !!response.venues.length
    ? response.venues
    : []
}

export const adaptGetVenuesSimilar = (
  payload: NPayload.IPayload<NSimilarVenues.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NSimilarVenues.IResponse>(payload)

  return !!response &&
    !!response.similarVenues &&
    !!response.similarVenues.items &&
    !!response.similarVenues.items.length
    ? response.similarVenues.items
    : []
}

export const adaptGetVenuesTrending = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => adaptGetVenuesSearch(payload)

export const adaptGetVenuesSuggestCompletion = (
  payload: NPayload.IPayload<NMiniVenue.IResponse>
): NMiniVenue.IMiniVenue[] => {
  const response = adaptPayload(payload)

  return response && response.minivenues && response.minivenues.length
    ? response.minivenues
    : []
}
