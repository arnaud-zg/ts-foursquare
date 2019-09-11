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
    venuePage: IVenuePage
  }
  interface ICategory {
    icon: IIcon
    id: string
    name: string
    pluralName: string
    primary: boolean
    shortName: string
  }

  interface IIcon {
    prefix: string
    suffix: string
  }

  interface ILocation {
    address: string
    cc: string
    city: string
    country: string
    crossStreet: string
    distance: number
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

  interface IVenuePage {
    id: string
  }
}
