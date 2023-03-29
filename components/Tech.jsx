import React from "react";
import zoom from "public/assets/zoom.png";
import dropbox from "public/assets/dropbox.png";
import stripe from "public/assets/stripe.png";
import slack from "public/assets/slack.png";
import mondaycom from "public/assets/mondaycom.png";
import Image from "next/image";

const techCompanies = [{
  name: zoom
},
{
  name: stripe
},
{
  name: mondaycom
},
{
  name: slack
},
{
  name: dropbox
}
]
const Tech = () => {
  return (
    <div className="flex md:px-28 px-5 justify-between md:justify-evenly bg-[#CCDBF0]">
      {techCompanies.map(companies =>    <div>
        <Image src={companies.name} alt='companies' className='object-contain w-20 h-20' />
      </div>)}
    </div>
  );
};

export default Tech;
