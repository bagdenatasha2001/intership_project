import React, { useState } from "react";
import { Link } from "react-router-dom";
import right from "../../assets/images/right_icon.png";
import left from "../../assets/images/left_icon.png";

export default function Pagination({ totalPages = 12, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        i === currentPage ||
        i === currentPage - 1 ||
        i === currentPage + 1
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === i
                ? "bg-purple-100 text-purple-700 font-semibold"
                : "text-gray-600 hover:text-purple-700"
              }`}
          >
            {i}
          </button>
        );
      } else if (
        (i === 2 && currentPage > 4) ||
        (i === totalPages - 1 && currentPage < totalPages - 3)
      ) {
        pages.push(
          <span key={`dots-${i}`} className="px-2 text-gray-500">
            ...
          </span>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between gap-6 mt-6">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 border rounded-full text-gray-700 hover:bg-[#006666]  hover:text-white ">
        <img src={left} alt="Previous" />
        <span>Previous</span>
      </button>
      <div className="flex items-center gap-3">{renderPageNumbers()}</div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 border rounded-full text-gray-700 hover:bg-[#006666] hover:text-white ">
        <span>Next</span>
        <img src={right} alt="Next" className="hover:text-white" />
      </button>
    </div>
  );
}
