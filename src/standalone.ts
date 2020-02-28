import { actions } from './actions'

export enum EReturnType {
  OBSERVABLE = 'OBSERVABLE',
  PROMISE = 'PROMISE',
}

export interface IConfigParams {
  config: IStandaloneConfig
}

export interface IStandaloneConfig {
  clientId: string
  clientSecret: string
  accessToken?: string
  returnType?: EReturnType
}

export class tsFoursquare {
  getLists: ReturnType<typeof actions.getLists>
  getPhotosDetails: ReturnType<typeof actions.getPhotosDetails>
  getVenuesCategories: ReturnType<typeof actions.getVenuesCategories>
  getVenuesExplore: ReturnType<typeof actions.getVenuesExplore>
  getVenuesLikes: ReturnType<typeof actions.getVenuesLikes>
  getVenuesListed: ReturnType<typeof actions.getVenuesListed>
  getVenuesNextVenues: ReturnType<typeof actions.getVenuesNextVenues>
  getVenuesSearch: ReturnType<typeof actions.getVenuesSearch>
  getVenuesSimilar: ReturnType<typeof actions.getVenuesSimilar>
  getVenuesSuggestCompletion: ReturnType<
    typeof actions.getVenuesSuggestCompletion
  >
  getVenuesTrending: ReturnType<typeof actions.getVenuesTrending>

  constructor({
    clientId,
    clientSecret,
    returnType = EReturnType.PROMISE,
  }: IStandaloneConfig) {
    const config = {
      clientId,
      clientSecret,
      returnType,
    }

    this.getLists = actions.getLists({ config })
    this.getPhotosDetails = actions.getPhotosDetails({ config })
    this.getVenuesCategories = actions.getVenuesCategories({ config })
    this.getVenuesExplore = actions.getVenuesExplore({ config })
    this.getVenuesLikes = actions.getVenuesLikes({ config })
    this.getVenuesListed = actions.getVenuesListed({ config })
    this.getVenuesNextVenues = actions.getVenuesNextVenues({ config })
    this.getVenuesSearch = actions.getVenuesSearch({ config })
    this.getVenuesSimilar = actions.getVenuesSimilar({ config })
    this.getVenuesSuggestCompletion = actions.getVenuesSuggestCompletion({
      config,
    })
    this.getVenuesTrending = actions.getVenuesTrending({ config })
  }
}
