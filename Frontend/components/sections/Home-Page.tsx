import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <section
      id="homePage"
      className="flex flex-col md:flex-row justify-center items-center  min-h-screen p-4 md:p-8 -my-0 sm:my-20">
      <div className="leftSection w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 md:mb-10">
          <h1 className="sectionHeadings font-bold mb-2 text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to <span className="text-[#4b8c9f]">Neera</span>
            <br />
            <span className="">The Guest House!</span>
          </h1>
        </div>

        {/* Image for mobile */}
        <div className="md:hidden mb-6">
          <Image
            src="/images/homepageimage.png"
            alt="Neera Guest House"
            className="rounded-lg w-full"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        {/* Subheading */}
        <p className="section1subheading text-center md:text-left mb-6 text-base sm:text-lg md:text-xl sm:px-14 px-0 justify-center">
          Situated in front of a serene lake in Ujjain, Neera blends traditional
          Indian hospitality with modern comfort, offering a peaceful and
          memorable stay for your family and friends.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <a href="#contactUs" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="exploreMoreBtn bg-yellow-500 hover:bg-yellow-600 text-white w-full px-6 py-3 text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </Button>
          </a>
        </div>
      </div>

      {/* Image for desktop */}
      <div className="w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 hidden md:block">
        <div className="w-full max-w-xl mx-auto">
          <Image
            src="/images/homepageimage.png"
            alt="Neera Guest House"
            className="rounded-lg w-full"
            width={800}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
