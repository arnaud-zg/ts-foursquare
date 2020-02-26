import { catchError, switchMap, map } from 'rxjs/operators'
import { EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { processFetchError, processFetchResponse, enhancedFetch } from './fetch'
import { adaptGetLists } from '../adapter'
import { GetListsProps } from 'actions/lists'

export const getObservableLists = ({ config, payload }: GetListsProps) => {
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
