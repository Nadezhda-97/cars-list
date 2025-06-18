// !!!

import { CarsResponse } from "../types/carsResponse";

//const url = 'https://plex-parser.ru-rating.ru/cars';

const fetchCars = async (page = 1, sort?: string, order?: string): Promise<CarsResponse> => {
  const params = new URLSearchParams({
    _limit: "12",
    _page: page.toString(),
  });

  if (sort && order) {
    params.set("_sort", sort);
    params.set("_order", order);
  }

  const response = await fetch(`https://plex-parser.ru-rating.ru/cars?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  console.log('response ->', response);
  return response.json();
};

export default fetchCars;

/* 
const fetchCars = async (page = 1): Promise<CarsResponse> => {
  const limit = 12;
  const response = await fetch(`https://plex-parser.ru-rating.ru/cars?_limit=${limit}&_page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  console.log('response ->', response);
  return response.json();
};
*/

/*
  return {
    data: paginated,
    meta: {
      page,
      totalPages,
    },
  } */