import React from "react";
import analysis from "@/public/assets/analysis.png";
import outroom from "@/public/assets/outroom.png";
import js from "@/public/assets/js.png";
import ux from "@/public/assets/ux.png";
import market from "@/public/assets/market.png";
import html from "@/public/assets/html.png";
import star from "@/public/assets/star.png";
import time from "@/public/assets/time.png";
import book from "@/public/assets/book.png";

import leo from "@/public/assets/Leo.png";
import jeff from "@/public/assets/jeff.png";
import sam from "@/public/assets/sam.png";
import jess from "@/public/assets/jess.png";
import clare from "@/public/assets/clare.png";
import adam from "@/public/assets/adam.png";
import Image from "next/image";
import Button from "./UI/Button";

const PopularCourses = () => {
  const data = [
    {
      img: ux,
      name: "Introduction to user research in UX Design",
      category: "Design",
      favs: "4.7k",
      views: "32.7k",
      time: "23hrs 50mins",
      lessons: "52 Lessons",
      authorImg: leo,
      authorname: "Leonard Victor",
      price: "$15.00",
    },
    {
      img: market,
      name: "Introduction to new marketing audience",
      category: "Marketing",
      favs: "4.7k",
      views: "8.7k+",
      time: "22hrs 30mins",
      lessons: "22 Lessons",
      authorImg: jeff,
      authorname: "Jeffrey Williams",
      price: "$32.00",
    },
    {
      img: html,
      name: "Introduction to HTML, CSS, & Bootstrap",
      category: "Development",
      favs: "4.7k",
      views: "12.7k+",
      time: "45hrs 50mins",
      lessons: "55 Lessons",
      authorImg: clare,
      authorname: "Claretta Mason",
      price: "$55.00",
    },
    {
      img: js,
      name: "Introduction to javascript, Git & GitHub",
      category: "Development",
      favs: "4.7k",
      views: "32.7k",
      time: "30hrs 50mins",
      lessons: "22 Lessons",
      authorImg: jess,
      authorname: "Jessica Duke",
      price: "$45.00",
    },
    {
      img: outroom,
      name: "Introduction to outroom  marketing analysis",
      category: "Marketing",
      favs: "4.7k",
      views: "4.7k+",
      time: "33hrs 50mins",
      lessons: "26 Lessons",
      authorImg: sam,
      authorname: "Samuel Jacobs",
      price: "$25.00",
    },
    {
      img: analysis,
      name: "Introduction to outroom  marketing analysis",
      category: "Marketing",
      favs: "4.7k",
      views: "15.7k",
      time: "10hrs 50mins",
      lessons: "22 Lessons",
      authorImg: adam,
      authorname: "Adam Smith",
      price: "$25.00",
    },
  ];
  return (
    <div className="md:px-20 px-5">
      <p className="text-center text-4xl mt-20 font-bold">
        Browse Our Popular Courses
      </p>
      <p className="text-center md:text-base text-sm  mt-9">
        high-defination video is video of higher resolution and quality than
        standard definition. while <br className="md:block hidden"/> there’s no standard meaning for high
        definition, generally any standard video image
      </p>
      <div className="flex items-center md:text-base text-sm mt-8 justify-evenly md:mx-60">
        <div className=" bg-white rounded px-4 py-3">
          <p className="text-[#004DB3]">All Categories</p>
        </div>
        <div>
          <p>Design</p>
        </div>
        <div>
          <p>Development</p>
        </div>
        <div>
          <p>Marketing</p>
        </div>
      </div>
      <div className="grid gap-1 md:gap-5 grid-cols-2 md:grid-cols-3 mt-10">
        {data.map((items, key) => (
          <div key={key} className="bg-white md:py-4 md:px-3 px-1 py-1 rounded-xl">
            <Image src={items.img} alt='Popular' />
            <div className="flex justify-between pt-4">
              <div
                style={{ background: "rgba(30, 93, 206, 0.2)" }}
                className=" py-1 px-4 rounded-full "
              >
                <p className="text-[#1E5DCE] font-bold text-[10px] md:text-[12px]">
                  {items.category}
                </p>
              </div>
              <div className="flex text-[10px] text-[#A1A1A1]">
                <div className="flex items-center">
                  <p>{items.favs} </p>
                  <div className="pl-[1px]">
                    <Image src={star} alt='star' />
                  </div>
                  <p className="ml-2">({items.views})</p>
                </div>
              </div>
            </div>
            <div className="md:mt-4 mt-2">
              <p className="font-bold text-[11px] md:text-[20px]">{items.name}</p>
            </div>
            <div className="flex md:mt-4 mt-2 items-center justify-between text-[8px] md:text-[12px] text-[#A1A1A1] ">
              <div className="flex items-center">
                <div>
                  <Image src={time} alt='time' />
                </div>
                <div className="ml-2">
                  <p>{items.time}</p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="">
                  <Image src={book} alt='book' />
                </div>
                <p className="ml-3">{items.lessons}</p>
              </div>
            </div>
            <div className="flex pb-2 justify-between items-center mt-2 md:mt-4">
              <div className="flex items-center">
                <div>
                  <Image src={items.authorImg} alt='author' className="md:w-8 md:h-8 w-4 h-4" />
                </div>
                <p className="font-bold md:text-[12px] text-[10px] ml-1 md-ml-3">{items.authorname}</p>
              </div>
              <div >
                <p className="text-[#004DB3] text-[10px] md:text-[18px] font-bold">
                  {items.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button
          text="Explore All Courses"
          style="text-white text-sm px-6 py-4 bg-[#004DB3] rounded "
        />
      </div>
    </div>
  );
};

export default PopularCourses;
