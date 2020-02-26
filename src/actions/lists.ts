import { NRequest } from '../../types'
import { getObservableLists } from '../services/lists'
import { IConfigParams } from '../standalone'

export interface GetListsProps extends IConfigParams {
  payload: NRequest.IListsPayload
}

export const getLists = ({ config, payload }: GetListsProps) =>
  getObservableLists({ config, payload }).toPromise()
