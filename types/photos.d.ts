import { NEntity } from './entity.d'
import { NIcon } from './icon'
import { NUser } from './user'
import { NVenue } from './venue'

export declare namespace NPhotos {
  interface IResponse {
    photo: IPhoto
  }

  export interface IPhoto {
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

  export interface ISource {
    name: string
    url: string
  }

  export interface IUser {
    id: string
    firstName: string
    lastName: string
    gender: string
    photo: IIconClass
  }

  export interface IIconClass {
    prefix: string
    suffix: string
  }

  export interface IVenue {
    id: string
    name: string
    contact: IContact
    location: ILocation
    categories: ICategory[]
  }

  export interface ICategory {
    id: string
    name: string
    pluralName: string
    shortName: string
    icon: IIconClass
    primary: boolean
  }

  export interface IContact {}

  export interface ILocation {
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
