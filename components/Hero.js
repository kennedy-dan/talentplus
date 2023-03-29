import React from "react";
import heroImg from "public/assets/heroImg.png";
import review from "public/assets/review.png";
import vector from "public/assets/herovector.png";
import vectorResponsive from "public/assets/responsive.png";
import Button from "./UI/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="md:flex px:10 md:px-20 items-center bg-[#004DB3]">
      <div className="">
        <p className="font-bold text-3xl md:text-6xl md:text-left text-center text-white">
          Grow your skills to <br /> advance your career path{" "}
        </p>
        <p className="text-white my-4 md:text-left md-text-base text-[12px] px-3 md:px-0 text-center">
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </p>
        <div className="flex items-center md:justify-start justify-center">
          <div className="">
            <Button
              text="Get Started Now"
              style="border rouneded border-white text-white md:text-base text-sm md:px-9 px-3 py-3"
            />
            <Button
              style="bg-white text-[#004DB3] md:text-base text-sm md:px-6 px-4 py-3 rounded ml-3"
              text="Enroll Now"
            />
          </div>
          <div className="absolute md:block hidden left-[46%]  mt-20">
            <Image src={vector} alt='vector' className='' />
          </div>
          <div className="absolute md:hidden  left-[70%] mt-60 ">
            <Image src={vectorResponsive} alt='vectorResponsive' className='' />
          </div>
        </div>

        <div className="mt-4 flex md:justify-start justify-center items-center">
          <Image src={review} alt='review' />
          <div className="text-center ml-3">
            <p className="font-bold text-white text-xl">255k+</p>
            <p className="text-white text-center">Previews</p>
          </div>
        </div>
      </div>
      <div className="md:ml-9 md:mt-0 mt-20">
        <Image src={heroImg} alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
