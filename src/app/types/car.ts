type Images = {
  image: string[];
}

export interface Car {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images: Images;

  engine_power: string; /* "150 л.с." */
  color: string; /* "Черный" */
  year: number; /* 2021 */
  engine_type: string; /* "Бензин" */
  gearbox: string; /* "Автомат робот" */
  //run: number; /* 48716 */
}