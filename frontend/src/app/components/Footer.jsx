"use client";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative text-white text-center p-6 bg-[url('/assets/bg/footerbg.jpg')] bg-cover bg-center bg-no-repeat justify-center items-center">
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="relative z-10 md:hidden">
        <img src="/assets/logo.png" alt="Logo" className="mx-auto h-12 w-auto mb-4 p-2" />
        <h1 className=" text-2xl font-bold mb-2 text-pink-500 m-12">LOCATION</h1>
        <p>Kompagnistræde 278</p>
        <p>1265 København H</p>
        <h1 className=" text-2xl font-bold mb-2 mt-4 text-pink-500 m-12">OPENING HOURS</h1>
        <p>WED-THU 10:30 TO 3 AM</p>
        <p>SAT-SUN 11 PM - 5 AM</p>
        <h2 className=" text-lg font-bold mb-2 mt-4 text-white m-12">Stay Connected With Us</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="border border-white  p-2">
            <FaFacebookSquare />
          </div>
          <div className="border border-white  p-2">
            <FaSnapchatGhost />
          </div>
          <div className="border border-white  p-2">
            <FaInstagram />
          </div>
        </div>
        <p className="text-white">Night Club</p>
        <p className="text-white">All Rights Reserved</p>
        <p className="text-white m-12"> Copyright &copy; NightClub</p>
      </div>
      <div className="hidden md:flex flex-row justify-center items-center gap-8 text-left">
        <div className="relative z-10 hidden md:block w-xs">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto mb-4 p-2" />
          <h1 className=" text-m font-bold text-pink-500 ">LOCATION</h1>
          <p className="text-sm">Kompagnistræde 278</p>
          <p className="text-sm">1265 København H</p>
          <h1 className=" text-m font-bold mb-2 mt-4 text-pink-500 ">OPENING HOURS</h1>
          <p className="text-sm">WED-THU 10:30 TO 3 AM</p>
          <p className="text-sm">SAT-SUN 11 PM - 5 AM</p>
        </div>

        <div className="hidden md:block w-xs">
          <div className="relative z-10">
            <h1 className=" text-l font-bold mb-2 text-pink-500">NEWS</h1>
            <div className="flex justify-center space-x-4 mb-4">
              <img src="/assets/content-img/recent_post1.jpg" alt="Recent Post 1" className="h-16 w-16 object-cover" />
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-grey text-sm text-pink-500">April 17, 2026</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <img src="/assets/content-img/recent_post2.jpg" alt="Recent Post 2" className="h-16 w-16 object-cover" />
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-grey text-sm text-pink-500">April 17, 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-xs">
          <div className="relative z-10">
            <h1 className=" text-l font-bold mb-2 text-pink-500">RECENT POSTS</h1>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-white text-sm">It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-grey text-sm text-pink-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex flex-col justify-center mx-auto">
                <p className="text-white text-sm">It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-grey text-sm text-pink-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 hidden md:flex flex-row justify-center items-center gap-30 mt-8 text-white">
        <div className="hidden md:block flex flex-row">
          <p className="text-white text-sm">Night Club - All Rights Reserved</p>
        </div>
        <div className="hidden md:block flex flex-row">
          <h2 className=" text-lg font-bold mb-2 mt-4 text-white m-12 text-sm">Stay Connected With Us</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="border border-white  p-2">
              <FaFacebookSquare />
            </div>
            <div className="border border-white  p-2">
              <FaSnapchatGhost />
            </div>
            <div className="border border-white  p-2">
              <FaInstagram />
            </div>
          </div>
        </div>
        <p className="text-white text-sm"> Copyright &copy; NightClub</p>
      </div>
    </footer>
  );
}
