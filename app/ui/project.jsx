"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Project({ project }) {
  const { title, tile, description, tech, github, demo } = project;
  const [isOpen, setIsOpen] = useState(false);

  const techDis = tech.map((tech) => (
    <div
      key={tech}
      className="border-2 px-1 rounded-lg border-headers text-headers text-sm"
    >
      {tech}
    </div>
  ));

  return (
    <>
    <div className="rounded mt-2 w-60 bg-[#eeeeee] shadow-lg shadow-color-[#344736]">
      <Image
        className="rounded-t shadow shadow-color-[#4c5657]"
        src={tile}
        width={240}
        height={172}
        alt={`${title}`}
        priority="false"
      />
      {/* <span className="w-full h-0.5 bg-dark block"></span> */}
      <div className="p-3">
        <p className="text-captions text-sm">{description}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <div className="bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions">
            <a href={github}>GitHub</a>
          </div>
          {demo && <div className="bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions cursor-pointer">
            <p onClick={() => setIsOpen(true)}>Demo</p>
          </div>}
        </div>
        <div className="flex flex-wrap justify-start gap-1 mt-3">{techDis}</div>
      </div>
    </div>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <XMarkIcon onClick={() => setIsOpen(false)} className="h-6 w-6" aria-hidden="true" />
        <Dialog.Title>{`${title} Demo Video`}</Dialog.Title>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
    </>
  );
}
