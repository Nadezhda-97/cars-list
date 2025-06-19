import buildQueryString from "../utils/buildQueryString";
import { CarsResponse } from "../types/carsResponse";

const fetchCars = async (
  page: number = 1,
  sort?: string,
  order?: string,
  limit: string = "12"
): Promise<CarsResponse> => {
  const params = buildQueryString({
    limit,
    page: page.toString(),
    sort,
    order,
  });

  const response = await fetch(`https://plex-parser.ru-rating.ru/cars${params}`);
  if (!response.ok) throw new Error("Failed to fetch cars");
  return response.json();
};

export default fetchCars;