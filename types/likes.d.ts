import { NEntity } from './entity'

export declare namespace NLikes {
  interface IResponse {
    likes: NEntity.IEntityGroup<IItem>
  }

  interface IItem {
    id: string
    firstName: string
    lastName: string
    gender: string
    photo: IPhoto
  }

  interface IPhoto {
    prefix: string
    suffix: string
  }
}
