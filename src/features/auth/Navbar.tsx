import Link from "next/link";
import React from "react";

type Props = {

};

export const Navbar = (props: Props) => {
  return (
    <div className="px-5 lg:px-10 py-3 sticky top-0 z-50 flex items-center justify-between bg-primary-light">
      <Link href="/" className="">
        <p className="font-mono text-3xl font-bold">Rephrazr</p>
      </Link>
    </div>
  );
};
