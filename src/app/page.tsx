import LatestBlog from "@/components/LatestBlogs/LatestBlog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <>
      <h1 className="">
        <LatestBlog blogs={blogs} />
      </h1>
    </>
  );
};

export default HomePage;
