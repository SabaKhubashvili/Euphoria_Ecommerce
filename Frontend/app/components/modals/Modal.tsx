"use client";

import { CloseIcon } from "@/public/Svg/Icons";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactElement;
  footer?: React.ReactElement;
}

export const Modal = ({ isOpen, onClose, title, body, footer }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(onClose, 300);
  }, [setShowModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-neutral-800/70 z-[100] flex justify-center items-center`}
    >
      <div className="md:w-4/6 lg:w-3/6 xl:w-2/5 w-full my-6 mx-auto h-full md:h-auto">
        <div
          className={`
           ${showModal ? "translate-y-0" : "translate-y-[2000%]"}
           transition-all duration-300   w-full h-full
           `}
        >
          <div className="bg-white w-full h-full px-[20px] py-[10px] flex flex-col gap-[20px]">
              <div className="flex justify-between items-center border-b-[1px] border-b-secondaryGray pb-[10px]">
                <span className=" text-xl font-medium ">
                  {title}
                </span>
                <div onClick={handleClose}>
                  <CloseIcon/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
