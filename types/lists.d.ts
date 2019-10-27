import { NEntity } from './entity.d'
import { NIcon } from './icon'
import { NUser } from './user'
import { NVenue } from './venue'

export declare namespace NLists {
  interface IResponse {
    list: IList
  }

  interface IList {
    id: string
    name: string
    description: string
    type: string
    user: NUser.IUser
    editable: boolean
    public: boolean
    collaborative: boolean
    canonicalUrl: string
    createdAt: number
    updatedAt: number
    photo: IListPhoto
    logView: boolean
    visitedCount: number
    venueCount: number
    categories: NEntity.IEntityGroup<CategoriesItem>
    following: boolean
    followers: IFollowers
    collaborators: NEntity.IEntityGroup<CategoriesItem>
    sort: string
    listItems: IListItems
    completedCount: number
  }

  interface CategoriesItem {
    category: ICategory
    count: number
  }

  interface ICategory {
    id: string
    name: string
    pluralName: string
    shortName: string
    icon: NIcon.IIcon
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
    tip: ITip
    venue: IVenue
    index: number
    isNew: boolean
  }

  interface ITip {
    id: string
    createdAt: number
    text: string
    type: string
    canonicalUrl: string
    logView: boolean
    agreeCount: number
    disagreeCount: number
    todo: IFollowers
    saves: ISaves
    user: ISaves
  }

  interface ISaves {}

  interface IVenue extends Pick<NVenue.IVenue, 'id' | 'name' | 'location'> {
    contact: IContact
    verified: boolean
    stats: IStats
    url: string
    rating: number
    ratingColor: string
    ratingSignals: number
    allowMenuUrlEdit: boolean
    beenHere: IBeenHere
  }

  interface IBeenHere {
    lastCheckinExpiredAt: number
  }

  interface IContact {
    phone: string
    formattedPhone: string
  }

  interface ILabeledLatLng {
    label: string
    lat: number
    lng: number
  }

  interface IStats {
    checkinsCount: number
    usersCount: number
    tipCount: number
  }

  interface IListPhoto {
    id: string
    createdAt: number
    prefix: string
    suffix: string
    width: number
    height: number
    visibility: string
  }
}
