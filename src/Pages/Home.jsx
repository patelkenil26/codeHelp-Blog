import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-20 px-4">
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default Home;
