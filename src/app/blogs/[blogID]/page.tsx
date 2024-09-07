import { TBlog } from "@/components/types";
import BlogDetails from "@/components/ui/BlogDetails";
import React from "react";

interface BlogId {
  params: {
    blogID: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: TBlog) => ({
    blogID: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogID}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
