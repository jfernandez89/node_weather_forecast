const argv = require("yargs").options({
  address: {
    alias: "a",
    desc: "City address to get the weather",
    demmand: true,
  },
}).argv;

console.log(argv.address);
