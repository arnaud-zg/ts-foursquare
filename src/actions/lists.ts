import { NRequest } from '../../types'
import { getObservableLists } from '../services/lists'
import { IStandaloneConfig } from '../standalone'

export interface GetListsProps {
  config?: IStandaloneConfig
  payload: NRequest.IListsPayload
}

export const getLists = ({ config, payload }: GetListsProps) =>
  getObservableLists({ config, payload }).toPromise()
