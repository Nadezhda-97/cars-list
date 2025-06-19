import fetchCars from "../lib/fetchCars";
import SortSelect from "./SortSelect";
import CarCard from "./CarCard";
import Pagination from "./Pagination";
import { CarsResponse } from "../types/carsResponse";

interface ContentProps {
  searchParams: { [key: string]: string | undefined };
}

const Content = async ({ searchParams }: ContentProps) => {
  const currentPage = Number(searchParams._page) || 1;

  const limit = searchParams._limit || "12";
  const sort = searchParams._sort;
  const order = searchParams._order;

  let carsData: CarsResponse;
  try {
    carsData = await fetchCars(currentPage, sort, order, limit); 
  } catch (error) {
    console.error(error);
    return <p className="text-red-500">Ошибка при загрузке данных</p>;
  }

  const { data: cars, meta } = carsData;

  return (
    <div className="space-y-8">
      <SortSelect currentOrder={order} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.unique_id} car={car} />
        ))}
      </div>
      <Pagination
        currentPage={meta.page}
        totalPages={meta.last_page}
        sort={sort} order={order}
        limit={limit} />
    </div>
  );
};

export default Content;