import { NeuButton } from "@/components/NeuButton";
import { motion } from "framer-motion";
import { CloseSquare } from "iconsax-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useLockedBody, useOnClickOutside, useWindowSize } from "usehooks-ts";
import { navigation } from "./Navbar";

type Props = {
  onClose(): void;
};

const MenuCard = (props: Props) => {
  const { onClose } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [_, setIsLocked] = useLockedBody(true);
  const screen = useWindowSize();

  useOnClickOutside(ref, () => {
    setIsLocked(false);
    onClose();
  });

  useEffect(() => {
    if (screen && screen?.width > 1024) {
      setIsLocked(false);
      onClose();
    }
  }, [onClose, screen, setIsLocked]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-50 lg:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-[3px] bg-black/25"
    >
      <div className="relative">
        <div className="relative h-full w-full blur-sm bg-black/10"></div>

        <motion.div
          initial={{ marginRight: "-80%" }}
          animate={{ marginRight: "2%" }}
          exit={{ marginRight: "-80%" }}
          ref={ref}
          className="w-[97%] h-[400px] bg-white mt-[2%] float-right rounded-xl shadow-[3px_3px_0px_black] border-2 border-neutral-700"
        >
          <div className="px-5 flex items-center justify-between pt-5">
            <Link href="/">
              <div className="flex items-center cursor-pointer click">
                <p className=" text-black text-3xl ml-2 font-medium">
                  Rephrazr
                </p>
              </div>
            </Link>

            <div className="flex items-center space-x-2">
              <NeuButton
                onClick={() => onClose()}
                variant="outline"
                className=" lg:hidden px-2"
              >
                <CloseSquare variant="Broken" />
              </NeuButton>
            </div>
          </div>

          <ul className="py-5 border-b border-neutral-200 px-5">
            {navigation.map((nav, index) => (
              <Link key={index} href={nav.href}>
                <li className="hover:bg-slate-100 text-black py-2 mb-2 rounded-md pl-3 font-medium">
                  {nav.name}
                </li>
              </Link>
            ))}

            <Link href="auth/login">
              <li className="hover:bg-slate-100 text-black py-2 mb-2 rounded-md pl-3 font-medium">
                Login
              </li>
            </Link>
          </ul>

          <div className="px-5 space-y-5 py-5">
            <NeuButton>Start free with email</NeuButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
