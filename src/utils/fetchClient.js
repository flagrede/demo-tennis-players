const DEFAULT_ENDPOINT =
  "https://eurosportdigital.github.io/eurosport-web-developer-recruitment";

export default async (endpointResource, options = {}) => {
  return fetch(
    `${process.env.API_URL || DEFAULT_ENDPOINT}${endpointResource}`,
    options
  ).then(response => {
    if (response.status >= 400) {
      throw response;
    }
    return response.json();
  });
};
