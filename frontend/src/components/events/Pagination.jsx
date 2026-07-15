const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary hover:text-white"
        }`}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded-lg transition ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "border hover:bg-primary hover:text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary hover:text-white"
        }`}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;