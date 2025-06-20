type Images = {
  image: string[];
}

export interface Car {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images: Images;

  engine_power: string;
  color: string;
  year: number;
  engine_type: string;
  gearbox: string;
}