import { Car } from "./car";

export interface CarsResponse {
  data: Car[];
  meta: {
    page: number;
    limit: number;
    total: number;
    count: number;
    last_page: number;
    next_page_link?: string;
    prev_page_link?: string;
  };
}