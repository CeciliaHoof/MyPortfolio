import Image from "next/image";

export default function Project({ project, imageHeight, imageWidth }) {
  const { title, image, description } = project;
  return (
    <div className="my-2 p-3 bg-[#d5d5d5] shadow-lg shadow-color-[#344736]">
      <h3 className="text-2xl font-bold tracking-tight text-sub-headers text-center sm:text-2xl">
        {title}
      </h3>
      <span className="w-full h-0.5 bg-dark block"></span>
      <div className="flex flex-row gap-x-3 pt-3">
          <p className="text-captions text-sm">{description}</p>

          {/* <p className="text-gray-900">{project.tech}</p> */}
          <Image
            className="rounded shadow shadow-color-[#4c5657]"
            src={image}
            height={imageHeight}
            width={imageWidth}
            alt={`Screenshot of ${project.title}`}
            priority="false"
          />
      </div>
    </div>
  );
}
