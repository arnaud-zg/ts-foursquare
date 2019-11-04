import { NPhotos } from './photos.d'

export declare namespace NPhotosState {
  interface IState {
    entities: { [photoId: string]: NPhotos.IPhoto }
  }
}
