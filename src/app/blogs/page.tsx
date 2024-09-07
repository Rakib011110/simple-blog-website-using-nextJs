"use client";

import { TBlog } from "@/components/types";
import BlogCard from "@/components/ui/BlogCard";
import { useGetsBlogsQuery } from "@/redux/api/baseApi";
import React from "react";

const BlogPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError } = useGetsBlogsQuery("");
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h1 className="text-center text-4xl  my-5">
          {" "}
          All blog from <span className="text-accent"> Blogiz</span>
        </h1>
        <p className="text-xl text-center text-gray-400 w-2/4 mx-auto ">
          {" "}
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </p>
        <div>
          <div className="grid   mt-5 grid-cols-4 gap-6 ">
            {blogs?.map((blog: TBlog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
