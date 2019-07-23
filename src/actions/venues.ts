import { NAction } from '../../types/action'
import { NVenues } from '../../types/venues'
import { venuesReducer } from 'reducers/venues'
import { getObservableVenuesSearch } from 'services/venues'

export enum EActionRequest {
  GET_VENUES_SEARCH = 'GET_VENUES_SEARCH',
}

export const getVenuesSearch = async (
  actionPayload: NAction.IActionPayload
): Promise<NVenues.IVenues> => {
  const service$ = getObservableVenuesSearch({ actionPayload })

  try {
    const data = await service$.toPromise()

    return venuesReducer({
      type: EActionRequest.GET_VENUES_SEARCH,
      payload: {
        ...data,
      },
    })
  } catch (err) {
    return err
  }
}
