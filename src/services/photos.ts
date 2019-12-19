import { StateObservable } from 'redux-observable'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction, NStore } from '../../types'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import {
  getDefaultRequestParameters,
  processFetchError,
  processFetchResponse,
} from './fetch'

export const getObservablePhotosDetails = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { photoId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.PHOTOS_DETAILS, { photoId }),
      param: {
        ...getDefaultRequestParameters(state$),
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}
