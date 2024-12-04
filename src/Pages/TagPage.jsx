import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <main className="mt-20 px-4">
        <div className="flex items-center gap-x-4 mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
          <h2 className="text-lg md:text-xl font-bold text-gray-700">
            Blogs Tagged <span className="text-blue-600">#{tag}</span>
          </h2>
        </div>
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default TagPage;
