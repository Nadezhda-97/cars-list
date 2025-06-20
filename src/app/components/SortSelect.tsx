"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import buildQueryString from "../utils/buildQueryString";

interface SortSelectProps {
  currentOrder?: string;
}

const SortSelect = ({ currentOrder = "" }: SortSelectProps) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const order = formData.get("_order")?.toString() || "";
    const sort = order ? "price" : undefined;

    const queryString = buildQueryString({
      limit: "12",
      page: "1",
      sort,
      order: order || undefined,
    });

    router.push(queryString);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full"
    >
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-600" />
        <select
          name="_order"
          id="sort"
          defaultValue={currentOrder}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer w-full sm:w-56"
        >
          <option value="">Без сортировки</option>
          <option value="asc">По возрастанию цены</option>
          <option value="desc">По убыванию цены</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-700 active:bg-blue-800 transition cursor-pointer w-full sm:w-auto"
      >
        Применить
      </button>
    </form>
  );
};

export default SortSelect;