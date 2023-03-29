/* eslint-disable */
import React from "react";
import Accordion from "./UI/Accordion";

export default function FAQ() {
  let data = [
    {
      title: "is there a free trial available?",
      details:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.  ",
    },

    {
      title: "is there a free trial available?",
      details:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.  ",
    },

    {
      title: "is there a free trial available?",
      details:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.  ",
    },
    {
      title: "is there a free trial available?",
      details:
        "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.  ",
    },
  ];
  return (
    <section className="my-20">
      <p className="text-center font-bold text-3xl md:text-5xl">
        frequently asked questions
      </p>
      <p className="text-center md:text-base text-sm md:mt-6 mt-5 lg:mt-10">
        high-defination video is video of higher resolution and quality than
        standard definition. while <br className="md:block hidden" /> there’s no standard meaning for high
        definition, generally any standard video image
      </p>
      <div className="flex items-center w-full ">
        <div className=" mt-10 w-full md:px-20 px-10">
          {data.map((item, index) => (
            <Accordion item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
