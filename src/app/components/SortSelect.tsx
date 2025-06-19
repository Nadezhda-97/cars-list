"use client";

import { Filter } from "lucide-react";

interface SortSelectProps {
  currentOrder?: string;
  //currentPage?: string;
}

const SortSelect = ({ currentOrder = "" }: SortSelectProps) => {
  return (
    <form
      method="GET"
      className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full"
    >
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-600" />
        <select
          name="_order"
          id="sort"
          defaultValue={currentOrder}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer w-full sm:w-56"
          onChange={(e) => {
            const form = e.target.form;
            if (!form) return;

            const select = e.target as HTMLSelectElement;

            // если выбран пустой option (без сортировки), удалим сортировку
            if (select.value === "") {
              // Убираем name, чтобы _order не ушёл в URL
              select.removeAttribute("name");

              // Удаляем скрытый _sort
              const sortInput = form.querySelector('input[name="_sort"]');
              if (sortInput) sortInput.remove();
            } else {
              // Восстанавливаем name, если сортировка выбрана
              select.name = "_order";

              // если сортировка выбрана, добавим скрытое поле _sort=price (если ещё не было)
              let sortInput = form.querySelector('input[name="_sort"]') as HTMLInputElement | null;
              if (!sortInput) {
                sortInput = document.createElement("input");
                sortInput.type = "hidden";
                sortInput.name = "_sort";
                sortInput.value = "price";
                form.appendChild(sortInput);
              }
            }
          }}
        >
          <option value="">Без сортировки</option>
          <option value="asc">По возрастанию цены</option>
          <option value="desc">По убыванию цены</option>
        </select>
      </div>

      {/* обязательно сохраняем _sort=price при выборе сортировки */}
      <input type="hidden" name="_sort" value="price" />

      {/* ЯВНО указываем страницу 1 при смене сортировки */}
      <input type="hidden" name="_page" value="1" />

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