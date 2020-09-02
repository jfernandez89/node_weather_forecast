const axios = require("axios");

const getLatLong = async (address) => {
  const encodedUrl = encodeURI(address);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "X-RapidAPI-Key": "put here your api key (https://rapidapi.com/)",
    },
  });

  const response = await instance.get();

  if (response.data.Results === null || response.data.Results.length === 0) {
    throw new Error(`There are no results for ${address}`);
  }

  const data = response.data.Results[0];

  const name = data.name;
  const latitude = data.lat;
  const longitude = data.long;

  return {
    name,
    latitude,
    longitude,
  };
};

module.exports = {
  getLatLong,
};
