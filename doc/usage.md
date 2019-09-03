# ts-foursquare

A JS client for working with [Foursquare APIs](https://developer.foursquare.com/docs/api).

Works in Node, any browser that support javascript.

## Table of contents

- [Usage](#usage)
  - [Set credentials](#set-credentials)
- [Overview](#overview)
- [Actions](#actions)

## Usage

### Set credentials

To **set credentials**, import credentials function from `'ts-foursquare'` and provide it with your access token.

The service client exposes methods that create requests.

```js
import { setCredentials } from 'ts-foursquare'

const clientId = ''
const clientSecret = ''

setCredentials({ clientId, clientSecret })
```

## Overview

**For more details, please read [the full classes documentation](./classes.md).**

## Actions

### `getVenuesSearch` [Deprecated]

Service methods return `Promise<NVenues.IVenues>`.

Typically, you'll create a `NAction.IActionPayload` then it returns a `Promise` that resolves with a [`NVenues.IVenues`] or rejects with a [`Error`].

For more details, please read [the full `getVenuesSearch` documentation](./docs/classes.md#getvenuessearch).

```js
import { getVenuesSearch } from 'ts-foursquare'

const onSearch = async () => {
  const state = await getVenuesSearch({ query: 'peter luger steakhouse' })

  return state
}
```
