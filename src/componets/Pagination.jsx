import React from "react";

const Pagination = ({ totalItems, postsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / postsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 border rounded cursor-pointer ${
            page === currentPage
              ? "bg-green-500 text-white font-bold"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
