const location = require("./location/location");

const argv = require("yargs").options({
  address: {
    alias: "a",
    desc: "City address to get the weather",
    demmand: true,
  },
}).argv;

location.getLatLong(argv.address).then(console.log);
