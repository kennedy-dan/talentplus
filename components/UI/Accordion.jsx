/* eslint-disable */
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Accordion({ item, index }) {
  const [show, setShow] = useState(false);
  const [showindex, setShowIndex] = useState(0);

  console.log(index);

  const handleShow = (i) => {
    setShow(!show);
    setShowIndex(i);
    console.log(i);
  };
  return (
    <div className="mt-10">
      <div
        className={"flex justify-between w-full  items-center"}
        onClick={() => handleShow(index)}
      >
        <p
          className={`text-left ${
            showindex === index && show === true
              ? "text-[#004DB3]"
              : "text-black"
          } `}
        >
          {item.title}
        </p>
        <div className="w-4 h-4">
          {showindex === index && show === true ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus />
          )}
        </div>
      </div>

      {show && (
        <div
          className="text-left md:text-base text-[12px] font-bold py-6"
        >
          {item.details}
        </div>
      )}
      <hr className=" mt-3" />
    </div>
  );
}
