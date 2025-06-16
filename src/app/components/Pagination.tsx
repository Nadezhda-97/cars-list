import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const createPageLink = (page: number) => `/?page=${page}`;

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex justify-center items-center gap-4">
      {hasPrev && (
        <Link
          href={createPageLink(currentPage - 1)}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          ← Назад
        </Link>
      )}

      <span className="text-gray-700">
        Страница {currentPage} из {totalPages}
      </span>

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