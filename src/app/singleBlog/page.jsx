"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const BlogPost = () => {
  // Data array for blog content
  const blogSections = [
    {
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      content: `Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Being able to speak even a few phrases in the local language can go a long way in making connections and boosting respect.`,
      image: "/testImg.jpg",
      name: "Tracy Walton",
      date: "August 20, 2022",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-white flex justify-center text-black p-4">
        <div className="max-w-3xl w-full">
          {/* Post Content - Mapped Sections */}
          <div className="text-base md:text-lg leading-relaxed">
            {blogSections.map((item, index) => (
              <div key={index} className="mb-10">
                {/* Section Title */}
               
                <h2 className="text-2xl md:text-4xl font-bold mb-1 ">
                  {item.title}
                </h2>
                <div className="text-sm bg-gray-300 rounded-lg w-fit px-2 py-1 text-blue-400 mb-2">
                  {item.category}
                </div>
                <div className="flex items-center text-gray-400 mb-6">
                  <span className="font-medium">{item.name}</span>
                  <span className="mx-2">-</span>
                  <span>{item.date}</span>
                </div>
               

                {/* Section Image */}
                {item.image && (
                  <div className="relative w-full h-48 md:h-64 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {/* Section Content */}
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
