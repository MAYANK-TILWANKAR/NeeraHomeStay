import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import placeholder from "../images/placeholder.jpeg";
import placeholder2 from "../images/placeholder2.jpeg";
import HomePageImg from "../images/homepageimage.png"; 

const HomePage: React.FC = () => {
  return (
    <section id="homePage" className='flex justify-center items-start bg-gray-100'>
      <div className="leftSection mt-[10vh] w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2 ">
        {/* Heading */}
        <div className="mb-10 relative md:mt-[5vh]">
          <h1 className="sectionHeadings font-bold mb-[0vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl sm:text-2rem">
            Welcome to <span className="text-[#4b8c9f]">Neera</span>
          </h1>
          <h1 className="sectionHeadings font-bold mb-[0vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl sm:text-2rem">
            
          </h1>
          <h1 className="sectionHeadings font-bold mb-[0vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl sm:text-2rem">
          <span className=''> The Guest House! </span>
        </h1>
        </div>

        {/* Image for mobile */}
        <div className='templeImg '>
          <Image
            src={HomePageImg}
            alt="Professional Teams"
            className="rounded-full w-full md:hidden"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Subheading */}
        <p className="section1subheading text-center md:text-left mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
          Situated in front of a calm lake in Ujjain, Neera blends traditional Indian hospitality with modern comfort for a peaceful and memorable stay for your Family and Friends.
        </p>

        {/* Third heading part */}
        

        {/* Button */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#contactUs">
          <Button 
            variant="default" 
            className="exploreMoreBtn bg-yellow-500 text-white w-full md:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg"
          >
            Book Now 
          </Button>
          </a>
          {/* <Link href="#" className="exploreMoreBtn2 text-gray-700" prefetch={false}>
            View All Services
          </Link> */}
        </div>
      </div>

      {/* Image for desktop */}
      <div className="w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2 hidden md:block mt-[0vh]">
        <div className='w-[70vw] max-w-xl mx-auto'>
          <Image
            src={HomePageImg}
            alt="Professional Teams"
            className="rounded-full w-full"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

// Icon components (if needed)

function GroupIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function ShoppingCartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

interface IconProps {
  className?: string;
}
