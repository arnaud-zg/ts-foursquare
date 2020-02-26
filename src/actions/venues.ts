import { NRequest } from '../../types'
import {
  getObservableVenuesCategories,
  getObservableVenuesExplore,
  getObservableVenuesLikes,
  getObservableVenuesListed,
  getObservableVenuesNextVenues,
  getObservableVenuesSearch,
  getObservableVenuesSimilar,
  getObservableVenuesSuggestCompletion,
  getObservableVenuesTrending,
} from '../services/venues'
import { IConfigParams } from '../standalone'

export interface GetVenuesCategoriesProps extends IConfigParams {}

export interface GetVenuesExploreProps extends IConfigParams {
  payload: NRequest.TVenuesExplorePayload
}

export interface GetVenuesLikesProps extends IConfigParams {
  payload: NRequest.IVenuesLikesPayload
}

export interface GetVenuesListedProps extends IConfigParams {
  payload: NRequest.IVenuesListedPayload
}

export interface GetVenuesNextVenuesProps extends IConfigParams {
  payload: NRequest.IVenuesNextVenuesPayload
}

export interface GetVenuesSearchProps extends IConfigParams {
  payload: NRequest.TVenuesSearchPayload
}

export interface GetVenuesSimilarProps extends IConfigParams {
  payload: NRequest.IVenuesSimilarPayload
}

export interface GetVenuesSuggestCompletionProps extends IConfigParams {
  payload: NRequest.TVenuesSuggestCompletionPayload
}

export interface GetVenuesTrendingProps extends IConfigParams {
  payload: NRequest.TVenuesTrendingPayload
}

export const getVenuesCategories = ({ config }: GetVenuesCategoriesProps) =>
  getObservableVenuesCategories({ config }).toPromise()

export const getVenuesExplore = ({ config, payload }: GetVenuesExploreProps) =>
  getObservableVenuesExplore({ config, payload }).toPromise()

export const getVenuesLikes = ({ config, payload }: GetVenuesLikesProps) =>
  getObservableVenuesLikes({ config, payload }).toPromise()

export const getVenuesListed = ({ config, payload }: GetVenuesListedProps) =>
  getObservableVenuesListed({ config, payload }).toPromise()

export const getVenuesNextVenues = ({
  config,
  payload,
}: GetVenuesNextVenuesProps) =>
  getObservableVenuesNextVenues({ config, payload }).toPromise()

export const getVenuesSearch = ({ config, payload }: GetVenuesSearchProps) =>
  getObservableVenuesSearch({ config, payload }).toPromise()

export const getVenuesSimilar = ({ config, payload }: GetVenuesSimilarProps) =>
  getObservableVenuesSimilar({ config, payload }).toPromise()

export const getVenuesSuggestCompletion = ({
  config,
  payload,
}: GetVenuesSuggestCompletionProps) =>
  getObservableVenuesSuggestCompletion({ config, payload }).toPromise()

export const getVenuesTrending = ({
  config,
  payload,
}: GetVenuesTrendingProps) =>
  getObservableVenuesTrending({ config, payload }).toPromise()
