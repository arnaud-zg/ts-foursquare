import {
  NEntity,
  NLikes,
  NMiniVenue,
  NNextVenues,
  NPayload,
  NRecommendedPlaces,
  NSimilarVenues,
  NVenue,
  NVenueListed,
  NVenuesCategories,
} from '../../types'
import { adaptPayload } from './payload'

export const adaptGetVenuesCategories = (
  payload: NPayload.IPayload<NVenuesCategories.IResponse>
): NVenuesCategories.ICategory[] => {
  const response = adaptPayload<NVenuesCategories.IResponse>(payload)

  return response?.categories || []
}

export const adaptGetVenuesExplore = (
  payload: NPayload.IPayload<NRecommendedPlaces.IResponse>
): NRecommendedPlaces.IGroupItem[] => {
  const response = adaptPayload<NRecommendedPlaces.IResponse>(payload)

  return response?.groups[0]?.items || []
}

export const adaptGetVenuesLikes = (
  payload: NPayload.IPayload<NLikes.IResponse>
): NEntity.IEntityGroup<NLikes.IItem> => {
  const response = adaptPayload<NLikes.IResponse>(payload)

  return (
    response?.likes || {
      count: 0,
      items: [],
      summary: '0 Likes',
    }
  )
}

export const adaptGetVenuesListed = (
  payload: NPayload.IPayload<NVenueListed.IResponse>
): NVenueListed.ILists => {
  const response = adaptPayload<NVenueListed.IResponse>(payload)

  return (
    response?.lists || {
      count: 0,
      groups: [],
    }
  )
}

export const adaptGetVenuesNextVenues = (
  payload: NPayload.IPayload<NNextVenues.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NNextVenues.IResponse>(payload)

  return response?.nextVenues.items || []
}

export const adaptGetVenuesSearch = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NVenue.IResponse>(payload)

  return response?.venues || []
}

export const adaptGetVenuesSimilar = (
  payload: NPayload.IPayload<NSimilarVenues.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NSimilarVenues.IResponse>(payload)

  return response?.similarVenues.items || []
}

export const adaptGetVenuesSuggestCompletion = (
  payload: NPayload.IPayload<NMiniVenue.IResponse>
): NMiniVenue.IMiniVenue[] => {
  const response = adaptPayload(payload)

  return response?.minivenues || []
}

export const adaptGetVenuesTrending = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => adaptGetVenuesSearch(payload)
