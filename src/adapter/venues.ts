import { NHttpStatuses } from 'http-response-status'
import { NPayload } from '../../types/payload.d'
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
