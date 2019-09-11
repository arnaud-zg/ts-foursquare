import { NHttpStatuses } from 'http-response-status'
import { NPayload } from '../../types/payload.d'
import { NRecommendedPlaces } from '../../types/recommendedPlaces'
import { NVenue } from '../../types/venue.d'

export const adaptGetVenuesSearch = (
  payload: NPayload.IPayload<NVenue.IResponse>
): NVenue.IVenue[] =>
  !!payload.meta &&
  payload.meta.code === NHttpStatuses.ESuccess.OK &&
  !!payload.response &&
  !!payload.response.venues &&
  !!payload.response.venues.length
    ? payload.response.venues
    : []

export const adaptGetVenuesExplore = (
  payload: NPayload.IPayload<NRecommendedPlaces.IResponse>
): NRecommendedPlaces.IGroup[] =>
  !!payload.meta &&
  payload.meta.code === NHttpStatuses.ESuccess.OK &&
  !!payload.response &&
  !!payload.response.groups &&
  !!payload.response.groups.length
    ? payload.response.groups
    : []
