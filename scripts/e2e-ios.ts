import { exec } from 'shelljs';

const allCountries = process.argv.includes('--allCountries');
const countriesByRegion = process.argv.includes('--countriesByRegion');

const getConfig = () => {
  let config = '__e2e__/config/config.json';

  if (allCountries) {
    config = '__e2e__/config/allCountries.json';
  } else if (countriesByRegion) {
    config = '__e2e__/config/countriesByRegion.json';
  }

  return config;
};

const openSimulator = () =>
  exec('open -a Simulator --args -CurrentDeviceUDID 8EB738E5-6163-44FD-A85A-06951490A02F');
const build = () => exec('detox build --configuration ios.sim.release');
const test = () =>
  exec(`detox test --configuration ios.sim.release --runner-config ${getConfig()}`);

openSimulator();
build();
test;
