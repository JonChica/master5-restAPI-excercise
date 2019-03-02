import axios from 'axios';
import 'babel-polyfill';

const baseUrl = 'http://localhost:3050';

// getAllCars () axios & async-await
export const getAllCars = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/cars`);
    return new Promise((resolve, _) => {
      const cars = response.data;
      resolve(cars);
    });
  } catch (error) {
    console.log(error);
  }
};

// getAllCars () fetch & Promises
export const getAllCarsFetch = () => {
  const cars = fetch(`${baseUrl}/api/cars`)
    .then(response => response.json())
    .catch(e => console.log(e));
  return new Promise((resolve, _) => {
    resolve(cars);
  });
};

// getCarById () axios & async-await
export const getCarById = async id => {
  try {
    const response = await axios.get(`${baseUrl}/api/cars/${id}`);
    return new Promise((resolve, _) => {
      const car = response.data;
      resolve(car);
    });
  } catch (error) {
    console.log(error);
  }
};

// getCarById () fetch & Promises
export const getCarByIdFetch = id => {
  const car = fetch(`${baseUrl}/api/cars/${id}`)
    .then(response => response.json())
    .catch(e => console.log(e));
  return new Promise((resolve, _) => {
    resolve(car);
  });
};

// addCar () axios & async-await
export const addCar = async car => {
  try {
    const response = await axios.post(`${baseUrl}/api/cars/`, car);
    return new Promise((resolve, _) => {
      resolve(response.statusText);
    });
  } catch (error) {
    console.log(error);
  }
};

// addCar () fetch & Promises
export const addCarFetch = car => {
  const response = fetch(`${baseUrl}/api/cars/`, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(e => console.log(e));

  return new Promise((resolve, _) => {
    resolve('OK');
  });
};
