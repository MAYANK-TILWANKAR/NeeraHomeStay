import Image from "next/image";

import { Button } from "@/components/ui/button";

import HomePageImg from "../images/homepageimage.png";

const HomePage: React.FC = () => {
  return (
    <section
      id="homePage"
      className="flex flex-col md:flex-row justify-center items-center bg-gray-100 h-screen p-4 md:p-8 pb-72 ">
      <div className="leftSection w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2">
        {/* Heading */}
        <div className="mb-6 md:mb-10 relative">
          <h1 className="sectionHeadings font-bold mb-2 text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Welcome to <span className="text-[#4b8c9f]">Neera</span>
            <br />
            <span className="">The Guest House!</span>
          </h1>
        </div>

        {/* Image for mobile */}
        <div className="templeImg md:hidden mb-6">
          <Image
            src={HomePageImg}
            alt="Neera Guest House"
            className="rounded-lg w-full"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Subheading */}
        <p className="section1subheading text-center md:text-left mb-6 text-sm sm:text-base md:text-lg">
          Situated in front of a calm lake in Ujjain, Neera blends traditional
          Indian hospitality with modern comfort for a peaceful and memorable
          stay for your Family and Friends.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <a href="#contactUs" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="exploreMoreBtn bg-yellow-500 hover:bg-yellow-600 text-white w-full px-6 py-3 text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </Button>
          </a>
        </div>
      </div>

      {/* Image for desktop */}
      <div className="w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2 hidden md:block">
        <div className="w-full max-w-xl mx-auto">
          <Image
            src={HomePageImg}
            alt="Neera Guest House"
            className="rounded-lg w-full"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
