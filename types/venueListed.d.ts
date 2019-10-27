import { NEntity } from './entity'
import { NUser } from './user'

export declare namespace NVenueListed {
  interface IResponse {
    lists: ILists
  }

  interface ILists {
    count: number
    groups: NEntity.IEntityGroup<IGroupItem>[]
  }

  interface IGroupItem {
    id: string
    name: string
    description: string
    type: string
    user: NUser.IUser
    editable: boolean
    public: boolean
    collaborative: boolean
    url: string
    canonicalUrl: string
    createdAt: number
    updatedAt: number
    photo: IItemPhoto
    followers: IFollowers
    listItems: NEntity.IEntityGroup<IListItemsItem>
    logView?: boolean
  }

  interface IFollowers {
    count: number
  }

  interface IListItemsItem {
    id: string
    createdAt: number
    photo?: IItemPhoto
  }

  interface IItemPhoto {
    id: string
    createdAt: number
    prefix: string
    suffix: string
    width: number
    height: number
    user: NUser.IUser
    visibility: string
  }
}
