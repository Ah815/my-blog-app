"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
// import { Image } from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BlogCard = () => {
  const data = useMemo(() => [
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
    // Add more entries as needed
  ], []); // Added an empty dependency array

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const totalPages = Math.ceil(data.length / blogsPerPage);
  const [currentBlogs, setCurrentBlogs] = useState([]);

  useEffect(() => {
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    setCurrentBlogs(data.slice(indexOfFirstBlog, indexOfLastBlog));
  }, [currentPage, data]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full p-4 md:p-9">
        <div className="relative w-full max-w-4xl h-fit">
          <Image
            src="/blogpage.jpeg"
            layout="responsive"
            width={500}
            height={700} // Adjusted height for better aspect ratio
            alt="Blog Header"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex text-lg font-semibold items-center justify-center p-4">
        <h2>Blog Listings</h2>
      </div>

      <div className="flex items-center justify-center w-full p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {currentBlogs.map((item, index) => (
            <HoverCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 my-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-2 py-2 rounded-lg bg-white text-black hover:bg-gray-600 ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        <span className="text-black">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-2 py-2 rounded-lg bg-white text-black hover:bg-gray-600 ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

const HoverCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative bg-white p-3 shadow-sm shadow-slate-400 rounded-lg text-black
            hover:scale-105 hover:bg-gray-300 hover:shadow-lg hover:opacity-90 sm:hover:opacity-100`}
    >
      <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-md">
        <Image
          src={item.img}
          alt={item.title}
          layout="fill"
          className="object-cover transition-transform transform hover:scale-110"
        />
      </div>

      <div className="mt-2">
        <p className="bg-gray-300 w-20 rounded-md text-sm text-blue-400">
          {item.category}
        </p>
        <h3 className="mt-2 text-xs sm:text-sm font-semibold">{item.title}</h3>
        <div className="mt-3 flex items-center">
          <Image
            src={item.profile}
            alt={`${item.name} Profile`}
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

export default BlogCard;




// const data = useMemo(() =>  [
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
//   {
//     img: "/testImg.jpg",
//     category: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing.",
//     profile: "/profile.jpg",
//     name: "Tracey Wilson",
//     date: "August 20, 2022",
//   },
// ]);