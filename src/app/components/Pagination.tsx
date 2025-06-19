import Link from "next/link";
import getPageNumbers from "../utils/getPageNumbers";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <nav className="mt-8 flex flex-wrap justify-center items-center gap-2 text-sm">
      {hasPrev && (
        <Link
          href={createPageLink(currentPage - 1)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition cursor-pointer text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Назад</span>
        </Link>
      )}

      {pageNumbers.map((page, index) =>
        page === 'dots' ? (
          <span key={`dots-${index}`} className="px-2 py-1 text-gray-400 select-none">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={createPageLink(page)}
            className={`px-3 py-1 rounded-lg border transition cursor-pointer text-sm min-w-[36px] text-center ${
              page === currentPage
                ? 'bg-blue-600 text-white border-blue-600 active:bg-blue-700'
                : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
            }`}
          >
            {page}
          </Link>
        )
      )}

      {hasNext && (
        <Link
          href={createPageLink(currentPage + 1)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition cursor-pointer text-sm"
        >
          <span className="hidden sm:inline">Вперёд</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
};

export default Pagination;