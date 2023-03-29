import React from "react";
import logo from "@/public/assets/logo.png";
import fb from "@/public/assets/fb.png";
import twitter from "@/public/assets/twitter.png";
import youtube from "@/public/assets/youtube.png";
import insta from "@/public/assets/insta.png";
import discord from "@/public/assets/discord.png";
import Image from "next/image";
import Button from "../UI/Button";

const Footer = () => {
  return (
    <div className="bg-[#000F24] px-10 md:px-20 py-20 md:flex justify-between">
      <div>
        <Image src={logo} className="md:pb-12 pb-3" />
        <p className="text-white ">
          Reach out to us on any of our social <br /> media networks
        </p>
        <div className="flex py-4 justify-between text-white">
          <Image src={fb} />
          <Image src={twitter} />
          <Image src={youtube} />
          <Image src={insta} />
          <Image src={discord} />
        </div>
      </div>
      <div className="text-white text-[12px] text-base mt-4 md:mt-0">
        <p className=" font-bold pb-2 md:pb-10 text-3xl">Useful Links</p>
        <p className="py-2">Home</p>
        <p className="py-2">About Us</p>
        <p className="py-2">Our Courses</p>
        <p className="py-2">Testimonials</p>
        <p className="py-2">Our Community</p>
      </div>
      <div className="text-white mt-4 md:mt-0 text-[12px] text-base">
        <p className=" font-bold text-3xl pb-5 md:pb-10">Community</p>
        <p className="py-2">help centers</p>
        <p className="py-2">Partners</p>
        <p className="py-2">Suggestions</p>
        <p className="py-2">Blog</p>
        <p className="py-2">Newsletter</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-white font-bold text-3xl pb-10 ">Subscribe Us</p>
        <div className="flex outline-1 w-fit outline  outline-[#004DB3]">
          <input className="bg-[#2A2A2B] outline-none" />
          <Button
            text="Send Message"
            style="text-white py-2 px-3 bg-[#004DB3] "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
