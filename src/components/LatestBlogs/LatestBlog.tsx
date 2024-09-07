import React from "react";
import { TBlog } from "../types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl my-5">
        {" "}
        Latest blog from <span className="text-accent"> Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto ">
        {" "}
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>

      <div className="grid  grid-cols-2 gap-6 ">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid  mt-5 grid-cols-3 gap-6 ">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
