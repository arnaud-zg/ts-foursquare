# ts-foursquare

A JS client for working with <a href="https://developer.foursquare.com/docs/api" target="_blank">Foursquare APIs</a>

## Table of contents

- [Usage](#usage)
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Actions](#actions)
  - [Lists action](#lists-action)
    - [getLists](#getLists)
  - [Photos action](#photos-action)
    - [getPhotosDetails](#getPhotosDetails)
  - [Venues action](#venues-action)
    - [getVenuesCategories](#getVenuesCategories)
    - [getVenuesExplore](#getVenuesExplore)
    - [getVenuesLikes](#getVenuesLikes)
    - [getVenuesListed](#getVenuesListed)
    - [getVenuesNextVenues](#getVenuesNextVenues)
    - [getVenuesSearch](#getVenuesSearch)
    - [getVenuesSimilar](#getVenuesSimilar)
    - [getVenuesSuggestCompletion](#getVenuesSuggestCompletion)
    - [getVenuesTrending](#getVenuesTrending)
- [Utils](##utils)
  - [Icon](#icon)
  - [Test](#test)
  - [url](#url)
    - [getLocationHref](#getLocationHref)
    - [getLocationSearch](#getLocationSearch)

## Usage

## Overview

## Getting Started

This quick start guide will get you up and running. Let's begin with a simple app with a list of venues.

### Requirements

Before we start, check that your computer or server meets the following requirements:

Node.js >= 10.x: Node.js is a server platform which runs JavaScript.

#### Gives details about a list

##### Promise

```ts
const ts4S = new tsFoursquare({ clientId: '1234', clientSecret: '5678' })

ts4Sq.actions
  .getLists({ payload: { listId: '5580721e498e7c48540bf83f' } })
  .then((list: NLists.IList) => {
    console.log({ list })
  })
  .catch((error: Error) => {
    console.error(error)
  })
  .finally(() => {
    // Do something if needed
  })
```

##### Async / Await

```ts
const getLists = async ({ payload }: NRequest.IListsPayload) => {
  try {
    const ts4S = new tsFoursquare({ clientId: '1234', clientSecret: '5678' })
    const list: NLists.IList = await ts4S.getLists({
      payload: { listId: '5580721e498e7c48540bf83f' },
    })
    console.log({ list })
  } catch (error) {
    console.error(error)
  } finally {
    console.log('done')
  }
}
```

## Actions

### Lists action

#### getLists

> Gives details about a list.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/lists/details" target="_blank">https://developer.foursquare.com/docs/api/lists/details</a></cite>

`getLists` is a function, it takes `GetListsProps` as props and return a promise `Promise<{NLists.IList | Error}>`.

- [GetListsProps](../src/actions/lists.ts)
- [NLists](../types/lists.d.ts)

##### Example

```js
const onFetchData = async () => {
  try {
    const list = await ts4S.getLists({
      payload: { listId: '5580721e498e7c48540bf83f' },
    })
    console.log(list)
  } catch (error) {
    console.error(error)
  }
}
```

### Photos action

#### getPhotosDetails

> Get details of a photo.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/photos/details" target="_blank">https://developer.foursquare.com/docs/api/photos/details</a></cite>

`getPhotosDetails` is a function, it takes `GetPhotosDetailsProps` as props and return a promise `Promise<{NPhotos.IPhoto | Error}>`.

- [GetPhotosDetailsProps](../src/actions/photos.ts)
- [NPhotos](../types/photos.d.ts)

##### Example

```js
const onFetchData = async () => {
  try {
    const photo = await ts4S.getPhotosDetails({
      payload: { listId: '51e4151c498e60b5d17bc721' },
    })
    console.log(photo)
  } catch (error) {
    console.error(error)
  }
}
```

### Venues action

#### getVenuesCategories

> Returns a hierarchical list of categories applied to venues. This list is also available on our categories page.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/categories" target="_blank">https://developer.foursquare.com/docs/api/venues/categories</a></cite>

`getVenuesCategories` is a function, it returns a promise `Promise<Error | NVenuesCategories.ICategory[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const categories = await ts4S.getVenuesCategories()
    console.log(categories)
  }
  catch (error: Error) {
    console.error(error)
  }
}
```

#### getVenuesExplore

> Returns a list of recommended venues near the current location. For more robust information about the venues themselves (photos/tips/etc.), please see our venue details endpoint.
>
> ~~If authenticated, the method will personalize the ranking based on you and your friends.~~ // @to-do
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/explore" target="_blank">https://developer.foursquare.com/docs/api/venues/explore</a></cite>

`getVenuesExplore` is a function, it takes `GetVenuesExploreProps` as props and return a promise `Promise<Error | NRecommendedPlaces.IGroupItem[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const recommendedPlaces = await ts4S.getVenuesExplore({ ll: '40.7099,-73.9622' })
    console.log(recommendedPlaces)
  }
  catch (error: Error) {
    console.error(error)
  }
}
```

#### getVenuesLikes

> Returns friends and a total count of users who have liked this venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/likes" target="_blank">https://developer.foursquare.com/docs/api/venues/likes</a></cite>

`getVenuesLikes` is a function, it takes `GetVenuesLikesProps` as props and return a promise `Promise<Error | NEntity.IEntityGroup<NLikes.IItem>>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venuesLikes = await ts4S.getVenuesLikes({ venueId: '49b6e8d2f964a52016531fe3' })
    console.log(venuesLikes)
  }
  catch (error: Error) {
    console.error(error)
  }
}
```

#### getVenuesListed

> Returns the lists that this venue appears on.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/listed" target="_blank">https://developer.foursquare.com/docs/api/venues/listed</a></cite>

`getVenuesListed` is a function, it takes `getVenuesListed` as props and return a promise `Promise<Error | NVenueListed.ILists>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venuesListed = await ts4S.getVenuesListed({
      venueId: '49b6e8d2f964a52016531fe3',
    })
    console.log(venuesListed)
  } catch (error) {
    console.error(error)
  }
}
```

#### getVenuesNextVenues

> Returns venues that people often check in to after the current venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/nextvenues" target="_blank">https://developer.foursquare.com/docs/api/venues/nextvenues</a></cite>

`getVenuesNextVenues` is a function, it takes `GetVenuesNextVenuesProps` as props and return a promise `Promise<Error | NVenue.IVenue[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venues = await ts4S.getVenuesNextVenues({ venueId: '49b6e8d2f964a52016531fe3' })
    console.log(venues)
  }
  catch (error: Error) {
    console.error(error)
  }
}
```

#### getVenuesSearch

> Returns a list of venues near the current location, optionally matching a search term.
>
> To ensure the best possible results, pay attention to the intent parameter below.
>
> Note that most of the fields returned inside a venue can be optional. The user may create a venue that has no address, city, or state (the venue is created instead at the lat/long specified). Your client should handle these conditions safely. For more robust venue information (photos/tips/etc.), please see our venue details endpoint.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/search" target="_blank">https://developer.foursquare.com/docs/api/venues/search</a></cite>

`getVenuesSearch` is a function, it takes `GetVenuesSearchProps` as props and return `Promise<Error | NVenue.IVenue[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venues = await ts4S.getVenuesSearch({ ll: '40.7099,-73.9622' })
    console.log(venues)
  } catch (error) {
    console.error(error)
  }
}
```

#### getVenuesSimilar

> Returns a list of venues similar to the specified venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/similar" target="_blank">https://developer.foursquare.com/docs/api/venues/similar</a></cite>

`getVenuesSimilar` is a function, it takes `GetVenuesSimilarProps` as props and return `Promise<Error | NVenue.IVenue[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venues = await ts4S.getVenuesSimilar({ venueId: '49b6e8d2f964a52016531fe3' })
    console.log(venues)
  }
  catch (error: Error) {
    console.error(error)
  }
}
```

#### getVenuesSuggestCompletion

> Returns a list of mini-venues partially matching the search term, near the location.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/suggestcompletion" target="_blank">https://developer.foursquare.com/docs/api/venues/suggestcompletion</a></cite>

`getVenuesSuggestCompletion` is a function, it takes `GetVenuesSuggestCompletionProps` as props and return `Promise<Error | NMiniVenue.IMiniVenue[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const miniVenues = await ts4S.getVenuesSuggestCompletion({
      ll: '40.7099,-73.9622',
      query: 'Burger',
    })
    console.log(miniVenues)
  } catch (error) {
    console.error(error)
  }
}
```

#### getVenuesTrending

> Returns a list of venues near the current location with the most people currently checked in. For more robust information about the venues themselves (photos/tips/etc.), please see our venue details endpoint.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/trending" target="_blank">https://developer.foursquare.com/docs/api/venues/trending</a></cite>

`getVenuesTrending` is a function, it takes `GetVenuesTrendingProps` as props and return `Promise<Error | NVenue.IVenue[]>`.

##### Example

```js
const onFetchData = async () => {
  try {
    const venues = await ts4S.getVenuesTrending({ ll: '40.7099,-73.9622' })
    console.log(venues)
  } catch (error) {
    console.error(error)
  }
}
```

### Url

#### getLocationSearch

Take a look at [getLocationHref](#getLocationHref)

#### getLocationHref

> The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.
>
> -- <cite>MDN web docs - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Location</a></cite>

```js
import { getLocationHref, getLocationSearch } from 'ts-foursquare'

const onFetch = async () => {
  return await fetch(
    getLocationHref({ origin, pathname, { query: 'burger' } })
  )
}
```
