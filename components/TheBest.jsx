import React from "react";
import boy from "@/public/assets/boywithLaptop.png";
import price from "@/public/assets/price.png";
import mentor from "@/public/assets/mentor.png";
import meet from "@/public/assets/meet.png";
import clock from "@/public/assets/clock.png";

import Image from "next/image";
const TheBest = () => {
  const data = [
    {
      name: "Experienced Mentors",
      icon: mentor,
      text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      name: "One-On-One meetings",
      icon: clock,
      text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      name: "One-on-One meetings",
      icon: meet,
      text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
    {
      name: "Affordable Prices",
      icon: price,
      text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ",
    },
  ];
  return (
    <div className="xl:grid grid-cols-2 justify-between px-5 md:px-20 pt-20">
      <div className="md:flex items-center">
        <div className="">
          <p className="font-bold text-4xl">
            This Is Why We Are Best <br /> From Others.
          </p>
          <p className="text-sm py-4">
            high-defination video is video of higher resolution and quality than
            standard <br /> definition. while there’s no standard meaning for
            high definition, generally any
            <br /> standard video image
          </p>
          <Image src={boy} alt='boy' className="rounded w-[500px]  object-contain" />
        </div>
      </div>
      <div className="flex items-center lg:mt-0 mt-10">
        <div className="grid grid-cols-2 h-fit md:gap-4 gap-1 ">
          {data.map((items, key) => (
            <div key={key} className="bg-white px-4 py-6 rounded">
              <Image src={items.icon} alt='icon' className="h-8 w-8" />

              <p className="font-bold text-sm md:text-base py-4">{items.name}</p>

              <p className="md:text-xs text-[11px] leading-[22px]">{items.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheBest;
