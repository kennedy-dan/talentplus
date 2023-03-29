import React, { useState, useEffect } from "react";
import data from "./data/comments";
import styles from "@/styles/landingpage.module.css";
import Image from "next/image";

const Card = ({ property }) => {
  const { index, name, comment, image, job } = property;
  return (
    <div
      className=" card w-[390px]  sm:w-[650px] md:w-[500px] rounded-lg   px-3 py-2"
      id={`card-${index}`}
    >
      <div className="details ">
        <p className="text-sm py-3 leading-[26px]  text-gray-500">{comment}</p>
        <div className="flex mt-6">
          <Image src={image} />
          <div className="ml-5">
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Comments = () => {
  const [property, setproperty] = useState(data.properties[0]);
  const [properties, setproperties] = useState(data.properties);
  const [count, setCount] = useState(true);
  const [newcount, setnewCount] = useState(true);

  useEffect(() => {
    // //Implementing the setInterval method
    // const interval = setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
    // console.log(count);
    // //Clearing the interval
    // if(count === 6){
    //    clearTimeout(interval);

    // }
    if (property.index === 7) {
      setCount(false);
    }
    const interval = setTimeout(
      () => {
        const newIndex = property.index + 1;
        setproperty(data.properties[newIndex]);
        // console.log(property.id);
      },

      700
    );
    if (property.index == 7) {
      clearTimeout(interval);
    }
  }, [property]);

  useEffect(() => {
    // //Implementing the setInterval method
    // const interval = setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
    // console.log(count);
    // //Clearing the interval
    // if(count === 6){
    //    clearTimeout(interval);

    // }
    var interval;
    console.log(count);

    if (property.index < 1) {
      setnewCount(false);
      setCount(true);
    }
    if (count === false && newcount === false) {
      console.log(newcount);
      interval = setTimeout(
        () => {
          const newIndex = property.index - 1;
          setproperty(data.properties[newIndex]);
        },

        700
      );

      if (property.index < 1) {
        clearTimeout(interval);
      }
    }
  }, [property, count]);

  // useEffect(() => {
  //     setInterval(() => {
  //       const newIndex = property.index - 1;
  //       setproperty(data.properties[newIndex]);
  //       console.log(property.index);
  //     }, 3000);

  //   });

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setproperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setproperty(data.properties[newIndex]);
  };

  return (
    <>
      <div className="mt-24">
        <div
          className={`${styles.cards_slider}  relativ active-slide-${property.index}`}
        >
          <div
            className={`${styles.cards_slider_wrapper} bg-[#F8F9FC] flex`}
            style={{
              transform: `translateX(-${
                property.index * (100 / properties.length)
              }%)`,
            }}
          >
            {properties.map((props) => (
              <div className="md:m-8 m-6 rounded-2xl bg-white px-8 py-5">
                <Card key={props._id} property={props} />
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Comments;
