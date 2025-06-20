"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import fetchCars from "../lib/fetchCars";
import SortSelect from "./SortSelect";
import CarCard from "./CarCard";
import Pagination from "./Pagination";
import { CarsResponse } from "../types/carsResponse";

const Content = () => {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("_page")) || 1;
  const limit = searchParams.get("_limit") || "12";
  const sort = searchParams.get("_sort") || undefined;
  const order = searchParams.get("_order") || undefined;

  const [carsData, setCarsData] = useState<CarsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCars(currentPage, sort, order, limit);
        setCarsData(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке данных");
        setCarsData(null);
      }
    };

    load();
  }, [currentPage, sort, order, limit]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!carsData) return null;

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