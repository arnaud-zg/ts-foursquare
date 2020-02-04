import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap, map } from 'rxjs/operators'
import { NRequest } from '../../types'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import { processFetchError, processFetchResponse } from './fetch'
import { adaptGetLists } from '../adapter'
import { IStandaloneConfig } from '../standalone'

export const getObservableLists = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IListsPayload
}) => {
  const { listId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.LISTS, { listId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetLists),
    catchError(processFetchError)
  )
}
