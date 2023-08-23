import { NeuButton } from "@/components/NeuButton";
import { AnimatePresence } from "framer-motion";
import { Menu } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import MenuCard from "../features/home/MenuCard";

type Props = {};

export const Navbar = (props: Props) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return !router.pathname.startsWith("/auth") ? (
    <Fragment>
      <nav className="px-5 lg:px-10 py-3 sticky top-0 z-[999] flex items-center justify-between bg-primary-light">
        <Link href="/" className="">
          <p className="font-mono text-3xl font-bold">Rephrazr</p>
        </Link>

        <ul className="hidden lg:flex items-center space-x-8 ">
          {navigation.map((item, index) => (
            <li key={index} className="hover:text-neutral-600">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <NeuButton
          onClick={() => setIsMenuOpen(true)}
          variant="outline"
          className=" lg:hidden px-2"
        >
          <Menu variant="Broken" />
        </NeuButton>

        <div className="space-x-8 hidden lg:block">
          <Link href="/auth/sign_in" className="cursor-pointer">
            Login
          </Link>
          <NeuButton onClick={() => router.push("/auth/sign_up")}>
            Start writing for free
          </NeuButton>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <MenuCard onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </Fragment>
  ) : null;
};

export const navigation = [
  {
    href: "/pricing",
    name: "Pricing",
  },
  {
    href: "/ambassadors",
    name: "Ambassadors",
  },
  {
    href: "/resources",
    name: "Resources",
  },
];
