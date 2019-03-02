import axios from 'axios';
import 'babel-polyfill';

const baseUrl = 'http://localhost:3050';

// getAllCars () axios
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
