'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill
import Image from 'next/image'; // Import the Image component from Next.js
import Footer from '@/components/Footer';

// Dynamically import React Quill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// Use uppercase letter for the component name
const Page = () => {
  const [blogImage, setBlogImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState(''); // State to store the blog content

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      blogImage,
      profileImage,
      category,
      title,
      name,
      date,
      content, // Include the blog content in the form data
    };
    console.log('Form Data Submitted: ', formData);
    // Submit form data to API here
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-6 max-w-5xl ">
        <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-black">Upload New Blog Post</h2>

          {/* Blog Image Upload */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="blogImage">
              Blog Image
            </label>
            <input
              type="file"
              id="blogImage"
              onChange={(e) => handleImageChange(e, setBlogImage)}
              className="block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />
            {blogImage && (
              <Image
                src={blogImage}
                alt="Blog Preview"
                className="mt-4 h-32 w-32 object-cover"
                width={128} // Adjust width according to your needs
                height={128} // Adjust height according to your needs
              />
            )}
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Blog Title */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="title">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Profile Image Upload */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="profileImage">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={(e) => handleImageChange(e, setProfileImage)}
              className="block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            />
            {profileImage && (
              <Image
                src={profileImage}
                alt="Profile Preview"
                className="mt-4 h-32 w-32 object-cover"
                width={128} // Adjust width according to your needs
                height={128} // Adjust height according to your needs
              />
            )}
          </div>

          {/* Author Name */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
              Author Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Date Picker */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="date">
              Blog Post Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Blog Content (React Quill) */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="content">
              Blog Content
            </label>
            <div className="h-56"> {/* Adjust height here */}
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                className="h-full bg-white text-black"
                placeholder="Write your blog content here..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-16 md:pt-14 ">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Page; // Ensure to export with the correct name
