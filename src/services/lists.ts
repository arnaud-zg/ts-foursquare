import { catchError, switchMap, map } from 'rxjs/operators'
import { EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { processFetchError, processFetchResponse, enhancedFetch } from './fetch'
import { adaptGetLists } from '../adapter'
import { GetListsProps } from '../actions/lists'
import { IConfigParams } from '../standalone'

export const getObservableLists = ({
  config,
  payload,
}: IConfigParams & GetListsProps) => {
  const { listId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.LISTS, { listId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetLists),
    catchError(processFetchError)
  )
}
