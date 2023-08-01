import { Eye, EyeSlash } from "iconsax-react";
import React from "react";

type Props = {
  isVisible: boolean;
  onClick: () => void;
};

const PasswordEye = (props: Props) => {
  const { isVisible, onClick } = props;
  return (
    <button
      type="button"
      className="flex items-center justify-center w-[25px] h-[25px]"
      onClick={onClick}
    >
      {isVisible ? (
        <EyeSlash
          size={25}
          variant="Bold"
          className="text-[20px] px-[2px] text-black"
        />
      ) : (
        <Eye
          size={25}
          variant="Bold"
          className="text-[20px] px-[2px] text-black"
        />
      )}
    </button>
  );
};

export default PasswordEye;
