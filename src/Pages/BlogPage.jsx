import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (err) {
      console.error(err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <main className="mt-20 px-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-6"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
        {loading ? (
          <p className="text-center text-lg font-bold">Loading...</p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="text-xl font-bold mt-8 mb-4">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.map((post) => (
                <BlogDetails key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-bold text-gray-700">
            No Blog Found
          </p>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
