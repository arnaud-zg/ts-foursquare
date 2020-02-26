import { NRequest } from '../../types'
import { getObservablePhotosDetails } from '../services/photos'
import { IConfigParams } from '../standalone'

export interface GetPhotosDetailsProps extends IConfigParams {
  payload: NRequest.IPhotosDetailsPayload
}

export const getPhotosDetails = ({ config, payload }: GetPhotosDetailsProps) =>
  getObservablePhotosDetails({ config, payload }).toPromise()
