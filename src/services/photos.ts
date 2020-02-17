import { fromFetch } from 'rxjs/fetch'
import { catchError, map, switchMap } from 'rxjs/operators'
import { NRequest } from '../../types'
import { adaptGetPhotosDetails } from '../adapter'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { IStandaloneConfig } from '../standalone'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import { processFetchError, processFetchResponse } from './fetch'

export const getObservablePhotosDetails = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IPhotosDetailsPayload
}) => {
  const { photoId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.PHOTOS_DETAILS, { photoId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetPhotosDetails),
    catchError(processFetchError)
  )
}
