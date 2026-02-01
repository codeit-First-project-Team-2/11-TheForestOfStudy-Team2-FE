export default function Pagination({
  currentPage,
  totalPage,
  onPageChange,
}) {
  return (
    <div>
      {Array.from({ length: totalPage }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}