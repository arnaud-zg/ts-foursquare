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
import { IStandaloneConfig } from '../standalone'

export interface GetVenuesCategoriesProps {
  config?: IStandaloneConfig
}

export interface GetVenuesExploreProps {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesExplorePayload
}

export interface GetVenuesLikesProps {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesLikesPayload
}

export interface GetVenuesListedProps {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesListedPayload
}

export interface GetVenuesNextVenuesProps {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesNextVenuesPayload
}

export interface GetVenuesSearchProps {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesSearchPayload
}

export interface GetVenuesSimilarProps {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesSimilarPayload
}

export interface GetVenuesSuggestCompletionProps {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesSuggestCompletionPayload
}

export interface GetVenuesTrendingProps {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesTrendingPayload
}

export const getVenuesCategories = () =>
  getObservableVenuesCategories().toPromise()

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
