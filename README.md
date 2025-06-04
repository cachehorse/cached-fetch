# [`@cachehorse`](https://cache.horse) / [`cached-fetch`](https://github.com/cachehorse/cached-fetch)

This package is a small wrapper around `fetch()`, allowing you to utilise [Cache Horse](https://cache.horse)'s caching and batching API.

## How to use

Installing:

```bash
npm install --save @cachehorse/cached-fetch
```

```js
import CachedFetch from '@cachehorse/cached-fetch'

const { get } = CachedFetch({ apiKey: '<your-api-key>' })

const URLS = [
  'https://dummyjson.com/http/200',
  'https://dummyjson.com/test'
]

const getOneEndpoint = async () => {
  const request = await get('https://dummyjson.com/http/200')
  return request.json()
}

const getMultipleEndpoints = async () => {
  const request = await get(['https://dummyjson.com/http/200', 'https://dummyjson.com/test'])
  return request.json()
}

getOneEndpoint()
getMultipleEndpoints()
```
