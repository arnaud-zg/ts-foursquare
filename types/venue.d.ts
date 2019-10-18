import { NIcon } from './icon.d'

export declare namespace NVenue {
  interface IResponse {
    venues: IVenue[]
  }

  interface IVenue {
    categories: ICategory[]
    hasPerk?: boolean
    id: string
    location: ILocation
    name: string
    referralId?: string
    venuePage?: IVenuePage
    photos?: IPhotos
    delivery?: IDelivery
    events?: IEvents
  }

  interface ICategory {
    icon: NIcon.IIcon
    id: string
    name: string
    pluralName: string
    primary: boolean
    shortName: string
  }

  export interface IDelivery {
    id: string
    url: string
    provider: IProvider
  }

  export interface IProvider {
    name: string
    icon: NIcon.IIcon
  }

  export interface IEvents {
    count: number
    summary: string
  }

  interface ILocation {
    address: string
    cc: string
    city: string
    country: string
    crossStreet?: string
    distance?: number
    formattedAddress: string[]
    labeledLatLngs: ILabeledLatLngs[]
    lat: number
    lng: number
    postalCode: string
    state: string
  }
  interface ILabeledLatLngs {
    label: string
    lat: number
    lng: number
  }

  interface IPhotos {
    count: number
    groups: any[]
  }

  interface IVenuePage {
    id: string
  }
}
