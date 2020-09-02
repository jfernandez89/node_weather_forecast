const location = require("./services/location");
const weather = require("./services/weather");

const argv = require("yargs").options({
  address: {
    alias: "a",
    desc: "City address to get the weather",
    demmand: true,
  },
}).argv;

const getInfo = async (address) => {
  try {
    const coordinates = await location.getLatLong(address);

    //Harcoded, use coordinates.latitude, coordinates.longitude when your API returns values
    const temperature = await weather.getTemperature(40.75, -74.0);

    return `The temperature of ${address} is ${temperature} C`;
  } catch (e) {
    return `Can't get the temperature from ${address}`;
  }
};

getInfo(argv.address).then(console.log).catch(console.log);
