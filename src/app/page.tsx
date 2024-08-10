import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image"; // Import Image from next/image
import Img1 from "../../public/01.jpg"; // Correctly import the image
import Img2 from "../../public/02.jpg";
import Img3 from "../../public/03.webp";

const cardData = [
  {
    image: Img1, // Use the imported image directly
    title: "พระเครื่องกรุงศรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดพระนครศรีอยุธยา",
    categories: ["พระเครื่องอยุธยา", "ไทย"],
  },
  {
    image: Img2,
    title: "พระเครื่องเพชรบุรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดเพชรบุรี",
    categories: ["พระเครื่องเพชรบุรี", "ไทย"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
  {
    image: Img1, // Use the imported image directly
    title: "พระเครื่องกรุงศรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดพระนครศรีอยุธยา",
    categories: ["พระเครื่องอยุธยา", "ไทย"],
  },
  {
    image: Img2,
    title: "พระเครื่องเพชรบุรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดเพชรบุรี",
    categories: ["พระเครื่องเพชรบุรี", "ไทย"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
  {
    image: Img1, // Use the imported image directly
    title: "พระเครื่องกรุงศรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดพระนครศรีอยุธยา",
    categories: ["พระเครื่องอยุธยา", "ไทย"],
  },
  {
    image: Img2,
    title: "พระเครื่องเพชรบุรี",
    badge: "มาใหม่",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากจังหวัดเพชรบุรี",
    categories: ["พระเครื่องเพชรบุรี", "ไทย"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
  {
    image: Img3,
    title: "พระกริ่งตั๊กแตน",
    badge: "นำเข้า",
    description: "พระเครื่องสิ่งศักดิ์สิทธิ์นำเข้ามาจากประเทศกัมพูชา",
    categories: ["พระเครื่องเขมร", "กัมพูชา"],
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Card Section */}
      <h1 className="text-center font-bold  text-[100px] pt-[30px]">
        ซื้อขายพระเครื่อง
      </h1>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl">
              <figure className="relative h-64 w-full">
                {/* Use the next/image component for all images */}
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Crops the image to fit the dimensions
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {card.title}
                  <div className="badge bg-[#FCEAC1]">{card.badge}</div>
                </h2>
                <p>{card.description}</p>
                <div className="card-actions justify-between items-center">
                  <div>
                    {card.categories.map((category, idx) => (
                      <div key={idx} className="badge badge-outline mr-1">
                        {category}
                      </div>
                    ))}
                  </div>
                  <button className="btn bg-[#FCEAC1]">ซื้อสินค้า</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
