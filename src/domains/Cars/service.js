const Cars = require("./module");
const { DateTime } = require("luxon");

async function fetchAvailableCars(params) {
  const { from, to } = params;

  let availableCars = await Cars.find({});

  const startDate = DateTime.fromISO(from);
  const endDate = DateTime.fromISO(to);

  const { days } = endDate.diff(startDate, ["days"]);

  if (availableCars.length) {
    availableCars = availableCars.map((car) => {
      return { ...car.toObject(), total_price: car.price * days };
    });
  }

  return {
    types: _getCarsType(availableCars),
    results: availableCars,
    total: availableCars.length,
    days: days,
  };
}

function _getCarsType(cars) {
  return cars.reduce((types, car) => {
    if (!types.includes(car.type)) {
      types.push(car.type);
    }
    return types;
  }, []);
}

module.exports = {
  fetchAvailableCars,
};
