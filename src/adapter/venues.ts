import { NPayload } from '../../types/payload.d'
import { NRecommendedPlaces } from '../../types/recommendedPlaces'
import { NVenue } from '../../types/venue.d'
import { adaptPayload } from './payload'

export const adaptGetVenuesSearch = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => {
  const response = adaptPayload<NVenue.IResponse>(payload)

  return !!response && !!response.venues && !!response.venues.length
    ? response.venues
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

export const adaptGetVenuesTrending = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] => adaptGetVenuesSearch(payload)
