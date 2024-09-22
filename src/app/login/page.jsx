"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { data, status } = useSession();
  console.log(data, status)
  const router = useRouter()

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push('/')
    }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-white shadow-sm shadow-slate-400 rounded-lg p-8 w-96 md:w-1/2 lg:w-1/3">
          <div className="text-center mb-6 text-xl font-semibold text-black">
            Sign In
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </button>
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-900"
              onClick={() => signIn("github")}
            >
              Sign in with Github
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
              onClick={() => signIn("facebook")}
            >
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
