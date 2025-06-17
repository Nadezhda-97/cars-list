type PageItem = number | 'dots';

const getPageNumbers = (currentPage: number, totalPages: number): PageItem[] => {
  const pageItems: PageItem[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i += 1) {
      pageItems.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageItems.push(1, 2, 3, 'dots', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageItems.push(1, 'dots', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageItems.push(1, 'dots', currentPage - 1, currentPage, currentPage + 1, 'dots', totalPages);
    }
  }

  return pageItems;
};

export default getPageNumbers;