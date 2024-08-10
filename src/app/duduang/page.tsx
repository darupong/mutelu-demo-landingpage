"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Logo from "../../../public/Logo.jpg";

const Index = () => {
  const [randomWord, setRandomWord] = useState("");

  const words = [
    "วันนี้คุณจะโชคดีแบบสุดๆ",
    "หมั่นทำบุญบ่อยๆ วันนี้ไม่ค่อยราบรื่น",
    "เพิ่มโชคด้วยการไปขอพรพระวิษณุ",
  ];

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  };

  return (
    <main className="min-h-screen bg-[#FCEAC1] flex flex-col">
      <Navbar />
      <div className="container flex flex-col items-center mx-auto justify-center py-12 flex-grow">
        <Image src={Logo} alt="logo" className="w-[500px] h-auto mb-8" />

        <button
          onClick={handleButtonClick}
          className="btn bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300"
        >
          ขอพรรายวัน
        </button>

        <p className="mt-8 text-lg text-gray-800 font-semibold text-center">
          {randomWord}
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
