let favoriteCityId = "rome";

//console.log(favoriteCityId);

favoriteCityId = "paris";

//console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

//console.log(citiesId)

//citiesId = []

citiesId.push("tokyo");

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;
  return { city, temperature };
}

const weather = getWeather("paris");

//console.log(weather);

const { city, temperature } = weather;
//console.log(city);
//console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;

//console.log(parisId, nycId, othersCitiesId.length);

class Trip {
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  static getDefaultTrip() {
    return new Trip(
      "rio-de-janeiro",
      "Rio de Janeiro",
      "img/rio-de-janeiro.jpg"
    );
  }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

//console.log(parisTrip, parisTrip.name);

parisTrip.price = 100;
//console.log(parisTrip.toString());

defaultTrip = Trip.getDefaultTrip();
//console.log(defaultTrip.toString());

class FreeTrip extends Trip {
  constructor(id, name, imageUrl) {
    super(id, name, imageUrl);
    this.price = 0;
  }
}

freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

//console.log(freeTrip.toString());

class TripService {
  constructor() {
    this.trips = new Set();
    this.trips.add(new Trip("paris", "Paris", "img/paris.jpg"));
    this.trips.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
    this.trips.add(
      new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    );
  }

  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let trip = [...this.trips].filter(elem => elem.name == tripName).pop();
        if (trip) {
          resolve(`Trip found : ${trip}`);
        } else {
          reject(`No trip with name ${tripName}`);
        }
      }, 2000);
    });
  }
}

class PriceService {
  constructor() {
    this.prices = new Map();
    this.prices.set("paris", 100);
    this.prices.set("rio-de-janeiro", 800);
  }

  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
       setTimeout( ()=> {
        let trip = this.prices.get(tripId);
        if (trip) {
          resolve(`Price found : ${trip}`);
        } else {
          reject(`No price found for id ${tripId}`);
        }}, 2000);
      })
  }
}

let tripService = new TripService();

tripService
  .findByName("Paris")
  .then(console.log)
  .catch(console.log);

  let priceService = new PriceService();

priceService
  .findPriceByTripId("rio-de-janeiro")
  .then(console.log)
  .catch(console.log);