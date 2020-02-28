import { catchError, map, switchMap } from 'rxjs/operators'
import { adaptGetPhotosDetails } from '../adapter'
import { EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { processFetchError, processFetchResponse, enhancedFetch } from './fetch'
import { GetPhotosDetailsProps } from 'actions/photos'
import { IConfigParams } from 'standalone'

export const getObservablePhotosDetails = ({
  config,
  payload,
}: GetPhotosDetailsProps & IConfigParams) => {
  const { photoId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.PHOTOS_DETAILS, { photoId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetPhotosDetails),
    catchError(processFetchError)
  )
}
