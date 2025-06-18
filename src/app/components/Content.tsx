import fetchCars from "../lib/fetchCars";
import SortSelect from "./SortSelect";
import CarCard from "./CarCard";
import Pagination from "./Pagination";
import { CarsResponse } from "../types/carsResponse";

interface ContentProps {
  searchParams: { [key: string]: string | undefined };
}

const Content = async ({ searchParams }: ContentProps) => {
  const currentPage = Number(searchParams.page) || 1;

  const sort = searchParams._sort;
  const order = searchParams._order;

  let carsData: CarsResponse;
  try {
    carsData = await fetchCars(currentPage, sort, order);
  } catch (error) {
    console.error(error);
    return <p className="text-red-500">Ошибка при загрузке данных</p>;
  }

  const { data: cars, meta } = carsData;

  return (
    <div className="space-y-8">
      {/* Сортировка */}
      <SortSelect currentOrder={order} />
      
      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard key={car.unique_id} car={car} />
        ))}
      </div>

      {/* Пагинация */}
      <Pagination currentPage={meta.page} totalPages={meta.last_page} sort={sort} order={order} />
    </div>
  );
};

export default Content;