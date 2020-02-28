import { NRequest } from '../../types'
import { getObservablePhotosDetails } from '../services/photos'
import { IConfigParams } from '../standalone'

export interface GetPhotosDetailsProps {
  payload: NRequest.IPhotosDetailsPayload
}

export const getPhotosDetails = ({ config }: IConfigParams) => ({
  payload,
}: GetPhotosDetailsProps) =>
  getObservablePhotosDetails({ config, payload }).toPromise()
