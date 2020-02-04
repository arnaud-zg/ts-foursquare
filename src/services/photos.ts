import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import { processFetchError, processFetchResponse } from './fetch'

export const getObservablePhotosDetails = ({
  action,
}: {
  action: NAction.IAction
}) => {
  const { photoId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.PHOTOS_DETAILS, { photoId }),
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}
