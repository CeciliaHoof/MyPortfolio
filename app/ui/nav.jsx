"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { contactInfo } from "../lib/contactInfo";
import clsx from "clsx";

const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blogs" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="w-full absolute inset-x-0 top-0 z-50 bg-medium">
      <nav
        className="w-full flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-4 text-white group"
            >
              {item.name}
              <span
                className={clsx(
                  "block group-hover:max-w-full transition-all duration-500 h-0.5 bg-white m-0",
                  pathname === item.href ? "w-full" : "max-w-0"
                )}
              ></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-start">
          {contactInfo.map((contact) => (
            <a key={contact.title} href={contact.href} className="hover:animate-wiggle">
              <Image
                src={contact.icon}
                height={24}
                width={contact.title === "medium" ? 34 : 24}
                alt={`${contact.title} logo`}
                priority="false"
              />
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-3 text-white hover:bg-medium"
                  >
                    {item.name}
                    
                  </Link>
                ))}
                <div className="flex justify-center gap-x-6">
                {contactInfo.map((contact) => (
                  <a key={contact.title} href={contact.href}>
                    <Image
                      src={contact.icon}
                      height={24}
                      width={contact.title === "medium" ? 34 : 24}
                      alt={`${contact.title} logo`}
                      priority="false"
                    />
                  </a>
                ))}
              </div>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
