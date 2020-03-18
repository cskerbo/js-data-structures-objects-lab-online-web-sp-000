const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  newDriver = Object.assign({}, driver, { [key]: value });
  newDriver[key] = value;
  return newDriver;
}
