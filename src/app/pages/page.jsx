// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// const pages = () => {
//   const data = [
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//     {
//       img: "/testImg.jpg",
//       category: "Technology",
//       title:
//         "The Impact of Technology on the Workplace: How Technology is Changing.",
//       profile: "/profile.jpg",
//       name: "Tracey Wilson",
//       date: "August 20, 2022",
//     },
//   ];

//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div className="flex justify-end p-4 md:pe-44">
//       <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300">
//         <Link href={"newBlog"} className={("newBlog")}>Add New Blog</Link>
//       </button>
//       <input
//         type="file"
//         id="file"
//         name="file"
//         className="hidden" // This will hide the input, we can trigger it from the button
//       />
//     </div>

//       <div className="bg-gray-800 text-white p-6 rounded-lg w-5/6 mx-auto text-center md:max-w-3xl md:mx-auto mt-10">
//         <div className="flex items-center justify-center mb-4">
//           <div className="mr-4"></div>
//           <div className="text-left">
//             <h3 className="flex justify-center text-lg font-semibold">
//               Muhammad Ahmed Hussain
//             </h3>
//             <p className="flex justify-center text-gray-400">
//               Collaborator & Editor
//             </p>
//           </div>
//         </div>
//         <p className="text-sm text-gray-300 mb-4">
//           Meet Jonathan Doe, a passionate writer and blogger with a love for
//           technology and travel. Jonathan holds a degree in Computer Science and
//           has spent years working in the tech industry, gaining a deep
//           understanding of the impact technology has on our lives.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <a
//             href="https://www.facebook.com/yourprofile"
//             target="_blank"
//             className="text-gray-400 hover:text-white"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faFacebook} size="2x" />
//           </a>
//           <a
//             href="https://www.twitter.com/yourprofile"
//             target="_blank"
//             className="text-gray-400 hover:text-white"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faTwitter} size="2x" />
//           </a>
//           <a
//             href="https://www.instagram.com/yourprofile"
//             target="_blank"
//             className="text-gray-400 hover:text-white"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faInstagram} size="2x" />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/yourprofile"
//             target="_blank"
//             className="text-gray-400 hover:text-white"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faLinkedin} size="2x" />
//           </a>
//         </div>
//       </div>

//       <div className="flex items-center justify-center w-full p-4 md:p-9">
//         <div className="relative w-full max-w-4xl h-fit">
//           <div className="flex items-center justify-center w-full p-2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
//               {/* Card 1 */}
//               {data.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-900 p-3 rounded-lg text-white transition-transform transform hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
//                 >
//                   <div className="relative w-full h-32 sm:h-40 overflow-hidden rounded-md">
//                     <Image
//                       src={item.img}
//                       alt="The Impact of Technology on the Workplace"
//                       layout="fill"
//                       className="object-cover transition-transform transform hover:scale-110" // Zoom effect on hover
//                     />
//                   </div>
//                   <div className="mt-2">
//                     <p className="bg-gray-900 w-20 rounded-md text-sm text-blue-400">
//                       {item.category}
//                     </p>
//                     <h3 className="mt-2 text-xs sm:text-sm font-semibold">
//                       {item.title}
//                     </h3>
//                     <div className="mt-3 flex items-center">
//                       <Image
//                         src={item.profile}
//                         alt="Author Profile"
//                         width={20}
//                         height={20}
//                         className="rounded-full"
//                       />
//                       <div className="ml-2">
//                         <p className="text-xs sm:text-sm">{item.name}</p>
//                         <p className="text-xs text-gray-400">{item.date}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default pages;
