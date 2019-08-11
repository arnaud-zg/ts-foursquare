import { NHttpStatuses } from '../../types/http'
import { NPayload } from '../../types/payload.d'
import { NVenue } from '../../types/venue.d'

export const adaptGetVenuesSearch = (
  payload: NPayload.IPayload<NVenue.IVenue[]>
) =>
  payload.meta.code === NHttpStatuses.ESuccess.OK &&
  !!payload.response &&
  !!payload.response.venues &&
  !!payload.response.venues.length
    ? payload.response.venues
    : []
