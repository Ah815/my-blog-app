"use client";
import Image from "next/image";
import React, { useState } from "react";

const HomeHeader = () => {
  const data = [
    {
      img: "/testImg1.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg2.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg3.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg2.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg4.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      img: "/testImg3.jpg",
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing.",
      profile: "/profile.jpg",
      name: "Tracey Wilson",
      date: "August 20, 2022",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center w-full p-4 md:p-9">
        <div className="relative w-full max-w-4xl h-fit">
          <Image
            src="/headerImage.jpg"
            layout="responsive"
            width={500}
            height={500} // Custom height
            alt="Picture of the author"
            style={{ height: "700px", borderRadius: "10px" }} // Ensures the image maintains aspect ratio
          />
        </div>
      </div>
      <div className="flex text-lg font-semibold md:flex items-center justify-center p-4">
        <h4>Latest Post</h4>
      </div>

       {/* Blog Cards */}
       <div className="flex items-center justify-center w-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {data.map((item, index) => (
            <HoverCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const HoverCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative bg-white p-3 shadow-sm shadow-slate-400 rounded-lg text-black hover:scale-105 hover:bg-gray-300 hover:shadow-lg hover:opacity-90 sm:hover:opacity-100`}
    >
      {/* Blog Image */}
      <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-md">
        <Image
          src={item.img}
          alt={item.title}
          layout="fill"
          className="object-cover transition-transform transform hover:scale-110"
        />
      </div>

      {/* Blog Details */}
      <div className="mt-2">
        <p className="bg-gray-300 w-20 rounded-md text-sm text-blue-400">
          {item.category}
        </p>
        <h3 className="mt-2 text-xs sm:text-sm font-semibold">{item.title}</h3>
        <div className="mt-3 flex items-center">
          <Image
            src={item.profile}
            alt="Author Profile"
            width={20}
            height={20}
            className="rounded-full"
          />
          <div className="ml-2">
            <p className="text-xs sm:text-sm">{item.name}</p>
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>
        </div>
      </div>

      {/* Learn More Button (visible on hover) */}
      {hover && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a
            href="/singleBlog" // Replace with the correct page URL
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-all"
          >
            Full Blog
          </a>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
