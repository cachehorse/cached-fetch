# [`@cachehorse`](https://cache.horse) / [`cached-fetch`](https://github.com/cachehorse/cached-fetch)

This package is a small wrapper around `fetch()`, allowing you to utilise [Cache Horse](https://cache.horse)'s caching and batching API.

## How to use

```js
import CachedFetch from '@cached-fetch'

const { get } = CachedFetch({ apiKey: '<your-api-key>' })
```
