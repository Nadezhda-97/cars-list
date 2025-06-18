"use client";

interface SortSelectProps {
  currentOrder?: string;
  //currentPage?: string;
}

const SortSelect = ({ currentOrder = "" }: SortSelectProps) => {
  return (
    <form method="GET" className="mb-4 flex items-center gap-2">
      <label htmlFor="sort" className="font-semibold">
        Сортировка:
      </label>
      <select
        name="_order"
        id="sort"
        defaultValue={currentOrder}
        className="border px-2 py-1 rounded"
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

      {/* обязательно сохраняем _sort=price при выборе сортировки */}
      <input type="hidden" name="_sort" value="price" />

      {/* ЯВНО указываем страницу 1 при смене сортировки */}
      <input type="hidden" name="_page" value="1" />

      <button
        type="submit"
        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
      >
        Применить
      </button>
    </form>
  );
};

export default SortSelect;