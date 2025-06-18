import Link from "next/link";
import getPageNumbers from "../utils/getPageNumbers";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  sort?: string;
  order?: string;
}

const Pagination = ({ currentPage, totalPages, sort, order }: PaginationProps) => {
  //const createPageLink = (page: number) => `/?page=${page}`;
  const createPageLink = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    if (sort) params.set("_sort", sort);
    if (order) params.set("_order", order);

    return `/?${params.toString()}`;
  };

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  // ??? Скрываем пагинацию, если всего одна страница
  if (totalPages <= 1) return null;


  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {hasPrev && (
        <Link
          href={createPageLink(currentPage - 1)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          ← Назад
        </Link>
      )}

      {pageNumbers.map((page, index) =>
        page === 'dots' ? (
          <span key={`dots-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={createPageLink(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </Link>
        )
      )}

      {hasNext && (
        <Link
          href={createPageLink(currentPage + 1)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Вперёд →
        </Link>
      )}
    </div>
  );
};

export default Pagination;