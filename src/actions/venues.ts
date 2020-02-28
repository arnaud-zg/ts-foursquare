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

export interface GetVenuesCategoriesProps {}

export interface GetVenuesExploreProps {
  payload: NRequest.TVenuesExplorePayload
}

export interface GetVenuesLikesProps {
  payload: NRequest.IVenuesLikesPayload
}

export interface GetVenuesListedProps {
  payload: NRequest.IVenuesListedPayload
}

export interface GetVenuesNextVenuesProps {
  payload: NRequest.IVenuesNextVenuesPayload
}

export interface GetVenuesSearchProps {
  payload: NRequest.TVenuesSearchPayload
}

export interface GetVenuesSimilarProps {
  payload: NRequest.IVenuesSimilarPayload
}

export interface GetVenuesSuggestCompletionProps {
  payload: NRequest.TVenuesSuggestCompletionPayload
}

export interface GetVenuesTrendingProps {
  payload: NRequest.TVenuesTrendingPayload
}

export const getVenuesCategories = ({
  config,
}: IConfigParams) => ({}: GetVenuesCategoriesProps) =>
  getObservableVenuesCategories({ config }).toPromise()

export const getVenuesExplore = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesExploreProps) =>
  getObservableVenuesExplore({ config, payload }).toPromise()

export const getVenuesLikes = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesLikesProps) =>
  getObservableVenuesLikes({ config, payload }).toPromise()

export const getVenuesListed = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesListedProps) =>
  getObservableVenuesListed({ config, payload }).toPromise()

export const getVenuesNextVenues = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesNextVenuesProps) =>
  getObservableVenuesNextVenues({ config, payload }).toPromise()

export const getVenuesSearch = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesSearchProps) =>
  getObservableVenuesSearch({ config, payload }).toPromise()

export const getVenuesSimilar = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesSimilarProps) =>
  getObservableVenuesSimilar({ config, payload }).toPromise()

export const getVenuesSuggestCompletion = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesSuggestCompletionProps) =>
  getObservableVenuesSuggestCompletion({ config, payload }).toPromise()

export const getVenuesTrending = ({ config }: IConfigParams) => ({
  payload,
}: GetVenuesTrendingProps) =>
  getObservableVenuesTrending({ config, payload }).toPromise()
