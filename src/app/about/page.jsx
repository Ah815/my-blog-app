"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dueDate: "",
    budget: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-4">
        {/* Grid Layout */}
        <div className="">
          {/* Left Column - Image and Short Bio */}
          <div className=" text-black shadow-sm shadow-slate-400 p-6 rounded-lg w-5/6 mx-auto text-center md:max-w-3xl md:mx-auto mt-10">
            <div className="flex items-center justify-center mb-4">
              <div className="mr-4"></div>
              <div className="text-left">
                <h3 className="flex justify-center text-lg font-semibold ">
                  Muhammad Ahmed Hussain
                </h3>
                <p className="flex justify-center text-black">
                  Collaborator & Editor
                </p>
              </div>
            </div>
            <p className="text-sm text-black mb-4">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                className="text-black hover:text-blue-600"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.twitter.com/yourprofile"
                target="_blank"
                className="text-black hover:text-blue-600"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                className="text-black hover:text-blue-600"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                className="text-black hover:text-blue-600"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Right Column - Long Bio and Contact Form */}
          <div className="col-span-2 ps-40 pe-40">
            {/* Long Bio */}

            {/* Contact Form */}
            <h2 className="text-xl font-bold mt-8 mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-black"
                  >
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 block text-black w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 block text-black w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block text-black w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Due Date */}
              <div>
                <label
                  htmlFor="dueDate"
                  className="block text-sm font-medium text-black"
                >
                  Due Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="mt-1 p-2 block text-black w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 block text-black w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium p-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;