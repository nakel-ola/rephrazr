import Link from "next/link";
import React from "react";
import { IoLogoTwitter } from "react-icons/io5";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="w-full bg-black px-8 lg:px-16 divide-y  ">
      <div className="flex flex-col lg:flex-row  py-12 gap-10 ">
        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
          <Link href="/" className="">
            <p className="font-mono text-3xl font-bold text-white">Rephrazr</p>
          </Link>

          <p className="mt-8 text-white">Join us on Twitter</p>

          <button className="flex items-center p-2 py-1 border border-gray-600 text-white mt-2 rounded text-sm">
            <IoLogoTwitter className="mr-2" />

            <p>Follow @rephrazr</p>
          </button>
        </div>

        <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-10 ml-0 lg:ml-10">
          {items.map((item, index) => (
            <div key={index} className="">
              <p className="text-lg font-bold text-white">{item.name}</p>

              <ul className="space-y-2 mt-5">
                {item.list.map((data, index) => (
                  <li key={index} className="text-gray-400 whitespace-nowrap">
                    <Link href={data.href}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p className="text-white text-center py-5">All rights reserved - Reword 2022</p>
      </div>
    </div>
  );
};

const items = [
  {
    name: "Company",
    list: [
      {
        href: "/pricing",
        name: "Pricing",
      },
      {
        href: "/ambassadors",
        name: "Ambassadors",
      },
      {
        href: "/status",
        name: "Status",
      },
    ],
  },
  {
    name: "Account",
    list: [
      {
        href: "#",
        name: "Log in",
      },
      {
        href: "#",
        name: "Sign up",
      },
      {
        href: "#",
        name: "Password Reset",
      },
    ],
  },
  {
    name: "Resources",
    list: [
      {
        href: "#",
        name: "Learning",
      },
      {
        href: "#",
        name: "Youtube",
      },
      {
        href: "#",
        name: "Support",
      },
    ],
  },
  {
    name: "Free Tools",
    list: [
      {
        href: "#",
        name: "Headline Generator",
      },
      {
        href: "#",
        name: "Subheading generator",
      },
      {
        href: "#",
        name: "Topic idea generator",
      },
    ],
  },
];
