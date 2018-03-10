const request = require("superagent");

module.exports = params => {
  const api_key = ["X-Api-Key", "API_KEY", "api_key", "apiKey"].reduce(
    (prev, key_opt) => (prev === undefined ? params[key_opt] : prev),
    undefined
  );

  if (api_key === undefined) {
    throw new Error("Missing required parameter for initialization: api_key.");
  }

  const process_url = url => `https://api.everhour.com/${url}`;

  return {
    get: url => request.get(process_url(url)).set("X-Api-Key", api_key),
    post: url => request.post(process_url(url)).set("X-Api-Key", api_key),
    put: url => request.put(process_url(url)).set("X-Api-Key", api_key),
    delete: url => request.delete(process_url(url)).set("X-Api-Key", api_key)
  };
};
