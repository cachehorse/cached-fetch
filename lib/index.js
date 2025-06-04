const get = (uris, opts = {}, ctx) => {
  const params = [];
  let horseUri = `${ctx.apiUri}/get`;

  if (Array.isArray(uris)) {
    params.push(`uris=${encodeURIComponent(uris.join("|"))}`);
  } else if (typeof uris === "string") {
    params.push(`uri=${encodeURIComponent(uris)}`);
  } else {
    throw new Error(`[cached-fetch]: Bad URL ${uris}. Must be a string/array.`);
  }

  if (opts.ttl) params.push(`ttl=${encodeURIComponent(opts.ttl)}`);
  if (opts.refresh) params.push(`refresh=${encodeURIComponent(opts.refresh)}`);

  horseUri += `?${params.join("&")}`;

  return ctx.fetch(horseUri, { headers: { "X-API-Key": ctx.apiKey } });
};

const CachedFetch = (options = {}) => {
  const ctx = {
    apiKey: options.apiKey,
    apiUri: options.apiUri || "https://api.cache.horse",
    fetch: options.fetch || fetch,
  };

  if (!ctx.apiKey)
    throw new Error(
      "[cached-fetch]: No apiKey provided. Go to https://cache.horse to get one.",
    );

  return { get: (uri, options) => get(uri, options, ctx) };
};

module.exports = CachedFetch;
