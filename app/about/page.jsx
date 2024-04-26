export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold tracking-tight text-headers sm:text-4xl">
        About Me
      </h1>
      <p className="text-2xl tracking-tight text-captions sm:text-xl w-7/12 m-auto mt-40 text-center">
        <span className="text-2xl font-bold tracking-tight text-sub-headers sm:text-3xl block">
          Loading...{" "}
        </span>
        I thought that this section would be the easy part, but it turns out
        that&apos;s not the case.  Check back soon!{" "}
        <span className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl block mt-10">
          Meanwhile, explore my projects and blog posts and let&apos;s connect!{" "}
        </span>
      </p>
    </>
  );
}
