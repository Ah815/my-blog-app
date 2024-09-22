import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black  py-10">
      <div className="flex justify-center">
        {/* Footer Content Wrapper */}
        <div className="w-full max-w-4xl px-4">
          {/* Footer Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 text-center md:text-left">
            
           

            {/* Category Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-bold mb-3">Categories</h3>
              <ul className="space-y-2 font-semibold text-sm">
                <li>Lifestyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Business</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-3">Weekly Newsletter</h3>
              <p className="text-sm mb-3 font-semibold">
                Get blog articles and offers via email.
              </p>
              <div className="flex justify-center font-semibold md:justify-start">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border rounded-l-md text-black w-32"
                />
                <button className="bg-blue-600 text-black px-3 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="border-t border-gray-700 pt-3">
            <div className="flex flex-col items-center font-bold md:flex-row md:justify-between text-center md:text-left">
              <p className="text-sm">&copy; MetaBlog | JS Template 2024. All Rights Reserved.</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="text-sm hover:underline">Terms of Use</a>
                <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                <a href="#" className="text-sm hover:underline">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// 'use client';
// import React from 'react';
// import Link from 'next/link'; // Assuming you're using Next.js

// const Footer = () => {
//   return (
//     <footer className="text-white py-10">
//       <div className="flex justify-center">
//         {/* Footer Content Wrapper */}
//         <div className="w-full max-w-4xl px-4">
//           {/* Footer Top Section */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 text-center md:text-left">
            
//             {/* Category Section */}
//             <div className="w-full md:w-1/4">
//               <h3 className="text-lg font-semibold mb-3">Categories</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="/categories/lifestyle">
//                     <a className="hover:underline">Lifestyle</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/categories/technology">
//                     <a className="hover:underline">Technology</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/categories/travel">
//                     <a className="hover:underline">Travel</a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/categories/business">
//                     <a className="hover:underline">Business</a>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Newsletter Section */}
//             <div className="w-full md:w-1/4">
//               <h3 className="text-lg font-semibold mb-3">Weekly Newsletter</h3>
//               <p className="text-sm mb-3">
//                 Get blog articles and offers via email.
//               </p>
//               <div className="flex justify-center md:justify-start">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="p-2 rounded-l-md text-gray-900 w-32"
//                 />
//                 <button className="bg-blue-600 text-white px-3 rounded-r-md">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Footer Section */}
//           <div className="border-t border-gray-700 pt-3">
//             <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
//               <p className="text-sm">&copy; MetaBlog | JS Template 2024. All Rights Reserved.</p>
//               <div className="flex space-x-4 mt-2 md:mt-0">
//                 <Link href="/terms-of-use">
//                   <a className="text-sm hover:underline">Terms of Use</a>
//                 </Link>
//                 <Link href="/privacy-policy">
//                   <a className="text-sm hover:underline">Privacy Policy</a>
//                 </Link>
//                 <Link href="/cookie-policy">
//                   <a className="text-sm hover:underline">Cookie Policy</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

