import { blogs } from "../lib/blogs";
import Blog from "../ui/blog";

export default function Page() {
  const featured = blogs
    .slice(0, 2)
    .map((post) => <Blog key={post.title} blog={post} type="featured" />);

  const other = blogs
    .slice(2)
    .map((post) => <Blog key={post.title} blog={post} type="other" />);

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-headers">
        Writing
      </h1>
      <div className="grid grid-rows-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-sub-headers mt-5 text-right">
            featured
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-start">
            {featured}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-sub-headers mt-5 text-right">
            other
          </h2>
          <div className="grid grid-cols-4 gap-3 justify-center">
            {other}
          </div>
        </div>
      </div>
    </>
  );
}
