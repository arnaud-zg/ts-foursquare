import { NVenue } from './venue'

export declare namespace NMiniVenue {
  interface IResponse {
    minivenues: IMiniVenue[]
  }

  type TMiniVenue = Pick<NVenue.IVenue, TMiniVenueKeys>

  type TMiniVenueKeys = 'id' | 'name' | 'hasPerk'

  type TMiniCategory = Pick<NVenue.ICategory, TMiniCategoryKeys>

  type TMiniCategoryKeys = 'icon' | 'id' | 'name' | 'pluralName' | 'shortName'

  type TMiniLocation = Pick<NVenue.ILocation, TMiniLocationKeys>

  type TMiniLocationKeys =
    | 'address'
    | 'city'
    | 'country'
    | 'crossStreet'
    | 'distance'
    | 'lat'
    | 'lng'
    | 'postalCode'
    | 'state'

  interface IMiniVenue extends TMiniVenue {
    categories: TMiniCategory[]
    location: TMiniLocation
  }
}
