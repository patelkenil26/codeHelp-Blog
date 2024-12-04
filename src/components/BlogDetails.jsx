import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <NavLink to={`/blog/${post.id}`} className="text-xl font-bold text-blue-600 dark:text-blue-400">
        {post.title}
      </NavLink>
      <p className="text-gray-600 dark:text-gray-300">
        By <span>{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="text-gray-600 dark:text-gray-400">Posted on {post.date}</p>
      <p className="text-gray-900 dark:text-gray-100">{post.content}</p>
      <div className="mt-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded mr-2"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
