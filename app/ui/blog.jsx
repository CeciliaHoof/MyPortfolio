import Image from "next/image";
import clsx from "clsx";

export default function Blog({ blog, type }) {
  const { title, link, published, image, summary, length } = blog;

  return (
    <div className={clsx("rounded bg-[#eeeeee] shadow-lg shadow-color-[#344736]", type === 'other' ? 'col-span-1 md: col-span2' : 'col-span-1')}>
      {image && (
        <Image
          className="rounded shadow shadow-color-[#4c5657] float-left mr-4 mb-2 md:mb-0"
          src={image}
          width={380}
          height={272}
          alt={`${title}`}
          priority="false"
        />
      )}
      <div className="p-4" >
        <h3
          className={clsx(
            "text-captions font-bold hover:animate-pulse text-center mb-2",
            type === "other" ? "text-base" : "text-lg"
          )}
        >
          <a href={link}>{title}</a>
        </h3>
        <div className="flex justify-between">
        <p
          className={clsx(
            "text-sub-headers",
            type === "other" ? "text-sm" : "text-base"
          )}
        >
          {length}
        </p>
        <p
          className={clsx(
            "text-sub-headers text-right",
            type === "other" ? "text-sm" : "text-base"
          )}
        >
          {published}
        </p>
        </div>
        <p
          className={clsx(
            "text-captions mt-2",
            type === "other" ? "text-sm" : "text-base"
          )}
        >
          {summary}
        </p>
        {/* <div className="flex flex-wrap justify-center gap-2">
          <div
            className={clsx(
              "bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions mt-3",
              type === "other" ? "text-sm" : ""
            )}
          >
            <a href={link}>View Post</a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
