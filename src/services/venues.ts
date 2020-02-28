import { catchError, map, switchMap } from 'rxjs/operators'
import {
  GetVenuesExploreProps,
  GetVenuesLikesProps,
  GetVenuesListedProps,
  GetVenuesNextVenuesProps,
  GetVenuesSearchProps,
  GetVenuesSimilarProps,
  GetVenuesSuggestCompletionProps,
  GetVenuesTrendingProps,
  GetVenuesCategoriesProps,
} from '../actions/venues'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesListed,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../adapter'
import { EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { processFetchError, processFetchResponse, enhancedFetch } from './fetch'
import { IConfigParams } from 'standalone'

export const getObservableVenuesCategories = ({
  config,
}: GetVenuesCategoriesProps & IConfigParams) =>
  enhancedFetch({
    config,
    pathname: EApiPathnames.VENUES_CATEGORIES,
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesCategories),
    catchError(processFetchError)
  )

export const getObservableVenuesExplore = ({
  config,
  payload,
}: GetVenuesExploreProps & IConfigParams) =>
  enhancedFetch({
    config,
    pathname: EApiPathnames.VENUES_EXPLORE,
    params: { ...payload },
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesExplore),
    catchError(processFetchError)
  )

export const getObservableVenuesLikes = ({
  config,
  payload,
}: GetVenuesLikesProps & IConfigParams) => {
  const { venueId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.VENUES_LIKES, { venueId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesLikes),
    catchError(processFetchError)
  )
}

export const getObservableVenuesListed = ({
  config,
  payload,
}: GetVenuesListedProps & IConfigParams) => {
  const { venueId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.VENUES_LISTED, { venueId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesListed),
    catchError(processFetchError)
  )
}

export const getObservableVenuesNextVenues = ({
  config,
  payload,
}: GetVenuesNextVenuesProps & IConfigParams) => {
  const { venueId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.VENUES_NEXT_VENUES, { venueId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesNextVenues),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSearch = ({
  config,
  payload,
}: GetVenuesSearchProps & IConfigParams) =>
  enhancedFetch({
    config,
    pathname: EApiPathnames.VENUES_SEARCH,
    // @ts-ignore
    params: {
      ...payload,
    },
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSearch),
    catchError(processFetchError)
  )

export const getObservableVenuesSimilar = ({
  config,
  payload,
}: GetVenuesSimilarProps & IConfigParams) => {
  const { venueId } = payload

  return enhancedFetch({
    config,
    pathname: generatePath(EApiPathnames.VENUES_SIMILAR, { venueId }),
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSimilar),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSuggestCompletion = ({
  config,
  payload,
}: GetVenuesSuggestCompletionProps & IConfigParams) =>
  enhancedFetch({
    config,
    pathname: EApiPathnames.VENUES_SUGGEST_COMPLETION,
    params: {
      ...payload,
    },
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSuggestCompletion),
    catchError(processFetchError)
  )

export const getObservableVenuesTrending = ({
  config,
  payload,
}: GetVenuesTrendingProps & IConfigParams) =>
  enhancedFetch({
    config,
    pathname: EApiPathnames.VENUES_TRENDING,
    params: {
      ...payload,
    },
  }).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesTrending),
    catchError(processFetchError)
  )
