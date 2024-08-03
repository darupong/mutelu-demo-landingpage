import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-h-screen h-screen flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-center">มีข้อมูลส่งมาทาง Line ได้เลยค้าบ</h1>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
