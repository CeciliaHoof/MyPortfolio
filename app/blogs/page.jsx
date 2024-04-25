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
      <h2 className="text-2xl font-bold tracking-tight text-sub-headers text-right">
        featured
      </h2>
      <div className="grid grid-cols-2 gap-4">{featured}</div>
      <h2 className="text-2xl font-bold tracking-tight text-sub-headers mt-5 text-right">
        other
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{other}</div>
    </>
  );
}
