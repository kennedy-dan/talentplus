import React from "react";
import map from "@/public/assets/maps.png";
import Image from "next/image";
import Button from "./UI/Button";
const Community = () => {
  return (
    <div className="bg-[#004DB3] mt-10 py-20">
      <p className="text-[12px] md:text-base text-white text-center">JOIN OUR COMMUNITY</p>
      <p className="text-base md:text-3xl lg:text-5xl pt-6 font-bold text-center  text-white  lg:leading-[64px]">
        Are you ready to connect with the future <br /> talent of the tech world
      </p>
        <p className="text-white text-sm md:text-base text-center pt-6 md:pt-10">Meet up with other techstars and grow together</p>
      <div className="flex justify-center">
        <Image src={map} alt='Community' />
      </div>
      <div className="flex justify-center mt-2">
      <Button text='Join Our Community' style='text-[#004DB3] text-sm bg-white md:px-8 md:py-3 px-4 py-2 rounded-lg' />

      </div>
    </div>
  );
};

export default Community;
