import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Button from "../UI/Button";
import Drawer from "../UI/Drawer";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";



const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between bg-[#004DB3] py-8 px-10 md:px-10 lg:px-20 items-center">
      <Image src={logo} alt='logo' />
      <div className="w-8">
        <AiOutlineMenu
          onClick={() => setIsOpen(true)}
          className="flex text-white md:hidden mr-5  h-8 w-6"
        />
      </div>
      <div className="hidden text-sm md:text-sm md:flex text-white items-center md:justify-evenly w-1/2">
        <p className="font-bold">Home</p>
        <p>About Us</p>
        <p>Courses</p>
        <p>Testimonial</p>
        <Button
          text="Enroll Now"
          style="text-[#004DB3] bg-white rounded-md py-3 px-4"
        />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="ml-5">
          <Link
            href="/"
      
          >
            <p className="text-black text-lg font-semibold">Home</p>
          </Link>
          <Link
            href='/'
          >
            {" "}
            <p className="text-black text-lg font-semibold">Shop</p>
          </Link>
          <Link
            href="/blog"
     
          >
            {" "}
            <p className="text-black text-lg font-semibold">Blog</p>
          </Link>
          <Link
            href="/portfolio"
      
          >
            {" "}
            <p className="text-black text-lg font-semibold">Portfolio</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
