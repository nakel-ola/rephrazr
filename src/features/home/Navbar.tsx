import { NeuButton } from "@/components/NeuButton";
import { AnimatePresence } from "framer-motion";
import { Menu } from "iconsax-react";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import MenuCard from "./MenuCard";

type Props = {};

export const Navbar = (props: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <Fragment>
      <nav className="px-5 lg:px-10 py-2 flex items-center justify-between">
        <Link href="/" className="">
          <p className="font-mono text-3xl font-bold">Rephrazr</p>
        </Link>

        <ul className="hidden lg:flex items-center space-x-8 ">
          {navigation.map((item, index) => (
            <li key={index}>{item.name}</li>
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
          <button className="">Login</button>
          <NeuButton>Start writing for free</NeuButton>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <MenuCard onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </Fragment>
  );
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
