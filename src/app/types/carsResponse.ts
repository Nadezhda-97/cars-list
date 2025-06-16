import { Car } from "./car";

export interface CarsResponse {
  data: Car[];
  meta: {
    page: number;
    totalPages: number;
  };
}