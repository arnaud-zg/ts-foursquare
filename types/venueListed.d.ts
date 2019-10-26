import { NUser } from './user'

export declare namespace NVenueListed {
  interface IResponse {
    lists: ILists
  }

  interface ILists {
    count: number
    groups: IGroup[]
  }

  interface IGroup {
    type: string
    name: string
    count: number
    items: IGroupItem[]
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
    listItems: IListItems
    logView?: boolean
  }

  interface IFollowers {
    count: number
  }

  interface IListItems {
    count: number
    items: IListItemsItem[]
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
