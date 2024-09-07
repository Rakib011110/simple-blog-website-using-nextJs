"use server";

import { TBlog } from "@/components/types";

export const createBlog = async (data: TBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",

    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const blogInfo = await res.json();

  return blogInfo;
};
