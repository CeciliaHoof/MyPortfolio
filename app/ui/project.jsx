"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Head } from 'next/head'
import clsx from "clsx";

export default function Project({ project, type }) {
  const { title, image, tile, description, tech, github, demo } = project;
  const [isOpen, setIsOpen] = useState(false);
  const [imageDis, setImageDis] = useState(tile);

  let imageWidth, imageHeight;

  if (type === "featured") {
    imageWidth = 460;
    imageHeight = 330;
  } else {
    imageWidth = 300;
    imageHeight = 215;
  }

  const techDis = tech.map((tech) => (
    <div
      key={tech}
      className={clsx("border-2 px-1 rounded-lg border-headers text-headers", type === "other" ? "text-xs" : "text-sm")}
    >
      {tech}
    </div>
  ));

  function closeDialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }

  return (
    <>
      <div className={clsx("rounded bg-[#eeeeee] shadow-lg shadow-color-[#344736] grid grid-cols-2", type === "featured" ? "col-span-3 lg:basis-1/2" : "col-span-2 lg:basis-1/3")}>
        <Image
          className="rounded shadow shadow-color-[#4c5657] col-span-2 lg:col-span-1"
          src={imageDis}
          width={imageWidth}
          height={imageHeight}
          alt={`${title}`}
          onMouseEnter={() => setImageDis(image)}
          onMouseOut={() => setImageDis(tile)}
        />
        <div className={clsx("text-center col-span-2 lg:col-span-1 flex flex-col justify-start", type === "featured" ? "p-4 gap-3" : "p-3 gap-1")}>
          <p className={clsx("text-captions", type === "other" ? "text-xs" : "text-sm")}>{description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <div
              className={clsx(
                "bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions",
                type === "other" ? "text-sm" : ""
              )}
            >
              <a href={github}>GitHub</a>
            </div>
            {demo && (
              <div
                className={clsx(
                  "bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions cursor-pointer",
                  type === "other" ? "text-sm" : ""
                )}
              >
                <p onClick={openDialog}>Demo</p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-1">{techDis}</div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-headers text-center"
                  >
                    <XMarkIcon
                      onClick={() => setIsOpen(false)}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    {`${title} Demo`}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div
                      className="relative"
                      style={{ paddingBottom: "64.94708994708994%", height: 0 }}
                    >
                      <iframe
                        src={demo}
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
