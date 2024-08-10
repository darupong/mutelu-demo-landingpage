"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Logo from "../../../public/Logo.jpg";

const Index = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [bgColor, setBgColor] = useState("");

  // Function to get the current day of the week
  const getCurrentDay = () => {
    const date = new Date();
    return date.toLocaleDateString("th-TH", { weekday: "long" });
  };

  // Function to determine the background color based on the current day
  const getBackgroundColor = (day: any) => {
    switch (day) {
      case "วันอาทิตย์":
        return "bg-red-500";
      case "วันจันทร์":
        return "bg-yellow-500";
      case "วันอังคาร":
        return "bg-pink-500";
      case "วันพุธ":
        return "bg-green-500";
      case "วันพฤหัสบดี":
        return "bg-orange-500";
      case "วันศุกร์":
        return "bg-blue-500";
      case "วันเสาร์":
        return "bg-purple-500";
      default:
        return "bg-[#FCEAC1]";
    }
  };

  useEffect(() => {
    const day = getCurrentDay();
    setCurrentDay(day);
    setBgColor(getBackgroundColor(day));
  }, []);

  // Function to handle button click and update the day and background color
  const handleButtonClick = () => {
    const day = getCurrentDay();
    setCurrentDay(day);
    setBgColor(getBackgroundColor(day));
  };

  return (
    <main className={`min-h-screen ${bgColor} flex flex-col`}>
      <Navbar />
      <div className="container flex flex-col items-center mx-auto justify-center py-12 flex-grow">
        <p className="mt-8 text-lg  font-semibold text-center text-white">
          วันนี้เป็นวัน: {currentDay}
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
