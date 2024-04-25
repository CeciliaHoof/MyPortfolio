"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function Project({ project, type }) {
  const { title, tile, description, tech, github, demo } = project;
  const [isOpen, setIsOpen] = useState(false);

  let imageWidth, imageHeight;

  if (type === "featured") {
    imageWidth = 460;
    imageHeight = 330;
  } else {
    imageWidth = 304;
    imageHeight = 218;
  }

  const techDis = tech.map((tech) => (
    <div
      key={tech}
      className="border-2 px-1 rounded-lg border-headers text-headers text-sm"
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
      <div
        className={
          "rounded bg-[#eeeeee] shadow-lg shadow-color-[#344736] w-full"}
      >
        <Image
          className="rounded shadow shadow-color-[#4c5657] float-left"
          src={tile}
          width={imageWidth}
          height={imageHeight}
          alt={`${title}`}
          priority="false"
        />
        {/* <span className="w-full h-0.5 bg-dark block"></span> */}
        <div className="p-3 text-center flex flex-col justify-start gap-3">
          <p className="text-captions text-sm">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions">
              <a href={github}>GitHub</a>
            </div>
            {demo && (
              <div className="bg-[#d5d5d5] border-2 px-1 rounded-lg border-captions text-captions cursor-pointer">
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
                    <XMarkIcon onClick={() => setIsOpen(false)} className="h-6 w-6" aria-hidden="true" />
                    {`${title} Demo`}
                  </Dialog.Title>
                  <div className="mt-2">
                    
                    <div className="relative" style={{ paddingBottom: "64.94708994708994%", height: 0 }}>
                      <iframe
                        src={demo}
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
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