import { NRequest } from '../../types'
import { getObservableLists } from '../services/lists'
import { IConfigParams } from '../standalone'

export interface GetListsProps {
  payload: NRequest.IListsPayload
}

export const getLists = ({ config }: IConfigParams) => ({
  payload,
}: GetListsProps) => getObservableLists({ config, payload }).toPromise()
