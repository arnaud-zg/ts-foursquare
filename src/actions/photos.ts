import { NRequest } from '../../types'
import { getObservablePhotosDetails } from '../services/photos'
import { IStandaloneConfig } from '../standalone'

export interface GetPhotosDetailsProps {
  config?: IStandaloneConfig
  payload: NRequest.IPhotosDetailsPayload
}

export const getPhotosDetails = ({ config, payload }: GetPhotosDetailsProps) =>
  getObservablePhotosDetails({ config, payload }).toPromise()
