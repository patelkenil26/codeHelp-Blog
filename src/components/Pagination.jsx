import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-900 py-3 border-t border-gray-300 dark:border-gray-700 shadow-md">
      <div className="flex justify-around items-center w-11/12 max-w-4xl mx-auto">
        <div className="flex justify-between gap-4">
          {page > 1 && (
            <button
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md 
                         hover:bg-gray-200 dark:hover:bg-gray-800 
                         transition text-gray-800 dark:text-gray-200"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md 
                         hover:bg-gray-200 dark:hover:bg-gray-800 
                         transition text-gray-800 dark:text-gray-200"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
