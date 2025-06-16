// !!!

import { CarsResponse } from "../types/carsResponse";

//const url = 'https://plex-parser.ru-rating.ru/cars';

const fetchCars = async (page = 1): Promise<CarsResponse> => {
  const limit = 12;
  const response = await fetch(`https://plex-parser.ru-rating.ru/cars?_limit=${limit}&_page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  console.log(response);
  return response.json();
};

export default fetchCars;

/*
  return {
    data: paginated,
    meta: {
      page,
      totalPages,
    },
  } */