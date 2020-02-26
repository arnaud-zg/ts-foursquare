import { NEntity } from './entity.d'
import { NIcon } from './icon'
import { NUser } from './user'
import { NVenue } from './venue'

export declare namespace NPhotos {
  interface IResponse {
    photo: IPhoto
  }

  interface IPhoto {
    id: string
    createdAt: number
    source: ISource
    prefix: string
    suffix: string
    width: number
    height: number
    user: IUser
    visibility: string
    venue: IVenue
  }

  interface ISource {
    name: string
    url: string
  }

  interface IUser {
    id: string
    firstName: string
    lastName: string
    gender: string
    photo: IIconClass
  }

  interface IIconClass {
    prefix: string
    suffix: string
  }

  interface IVenue {
    id: string
    name: string
    contact: IContact
    location: ILocation
    categories: ICategory[]
  }

  interface ICategory {
    id: string
    name: string
    pluralName: string
    shortName: string
    icon: IIconClass
    primary: boolean
  }

  interface IContact {}

  interface ILocation {
    address: string
    crossStreet: string
    lat: number
    lng: number
    postalCode: string
    cc: string
    city: string
    state: string
    country: string
    formattedAddress: string[]
  }
}
