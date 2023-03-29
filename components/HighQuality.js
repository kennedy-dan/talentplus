import React from "react";
import vector from "@/public/assets/vector.png";
import Image from "next/image";
import img from "@/public/assets/highquality.png";
import sub from "@/public/assets/subscribers.png";
import sound from "@/public/assets/speaker.png";
import live from "@/public/assets/live.png";
import record from "@/public/assets/record.png";
import notes from "@/public/assets/notes.png";

import Button from "./UI/Button";
const HighQuality = () => {
  const items = [
    {
      name: "Audio Classes",
      icons: sound,
    },
    {
      name: "Live Classes",
      icons: sound,
    },
    {
      name: "Recorded Classes",
      icons: sound,
    },
    {
      name: "50+ Notes",
      icons: sound,
    },
  ];
  return (
    <div className="md:flex items-center pt-20 px-7 md:px-20">
      <div className="h-full">
        <Image src={vector} alt='vector' className="-mt-9 left-[3%] md:w-fit md:h-fit w-10 h-10 absolute" />

        <p className="font-bold text-2xl mdtext-4xl md:text-left text-center">
          High quality video, audio & <br className="hidden" /> live classes
        </p>
        <p className="mt-3 text-sm text-center md:text-left">
          High-defination video is video of higher resolution and quality than
          standard <br className='hidden md:block' /> definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <div className="flex md:justify-start justify-center">
        <Button
          style="text-white bg-[#004DB3] rounded mt-8 md:mt-4 px-5 py-3"
          text="View Courses"
        />
        </div>
    
        <div className="grid grid-cols-2 gap-6 w-11/12 px-4 md:mt-4 mt-9">
            {items.map((item,key) => <div className="bg-white px-3 md:px-5 flex rounded py-3" key={key}>
                <Image src={item.icons} alt='icon' />
                <p className="pl-4 font-bold text-[10px]  md:text-base">{item.name}</p>
            </div>)}
        </div>
      </div>
      <div className="flex relative md:mt-0 mt-10">
        <div className="absolute top-14 md:top-28">
          <Image src={sub} alt='' className='md:w-fit md:h-fit w-40 object-contain h-20'/>
        </div>
        <Image src={img} alt='' />
      </div>
    </div>
  );
};

export default HighQuality;
