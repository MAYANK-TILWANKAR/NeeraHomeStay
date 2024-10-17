"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function NearbyAtraction() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const attractionImages = [
    {
      src: "/images/nearby/mahakaltemple.jpg",
      alt: "Mahakaleshwar Temple",
      title: "Mahakaleshwar Temple",
      description:
        "One of the twelve Jyotirlingas, this temple houses a self-manifested Shivalinga and is dedicated to Lord Shiva as the ruler of time.",
      link: "https://en.wikipedia.org/wiki/Mahakaleshwar_Jyotirlinga",
    },
    {
      src: "/images/nearby/harsiddhi-temple.png.webp",
      alt: "Harsiddhi Temple",
      title: "Harsiddhi Temple",
      description:
        "Known as a Shakti Peetha, this temple is linked to the story of Sati and showcases centuries of devotion through its Maratha-era renovations.",
      link: "https://en.wikipedia.org/wiki/Mangalnath_Temple",
    },
    {
      src: "/images/nearby/Chintaman-Ganesh.jpg",
      alt: "Chintaman Mandir",
      title: "Chintaman Mandir",
      description:
        "This 1,000-year-old temple on the Shipra River's banks is dedicated to Lord Ganesh, believed to remove worries and bestow prosperity.",
      link: "https://en.wikipedia.org/wiki/Chintaman_Ganesh_Temple,_Ujjain",
    },
    {
      src: "/images/nearby/kal-bhairav.png",
      alt: "Kal Bhairav Temple",
      title: "Kal Bhairav Temple",
      description:
        "Dedicated to Ujjain's guardian deity, Kal Bhairav, this temple is famous for its unique ritual of offering liquor to the deity.",
      link: "https://en.wikipedia.org/wiki/Kal_Bhairav_temple",
    },
    {
      src: "/images/nearby/ramghat.jpg",
      alt: "Ram Ghat",
      title: "Ram Ghat",
      description:
        "A sacred bathing ghat on the Shipra River, Ram Ghat is renowned for its spiritual significance and as a key venue for the Kumbh Mela.",
      link: "https://en.wikipedia.org/wiki/Ram_Ghat,_Ujjain",
    },
    {
      src: "/images/nearby/iskon.jpg",
      alt: "ISKCON Temple",
      title: "ISKCON Temple",
      description:
        "This beautiful temple dedicated to Lord Krishna offers spiritual enlightenment and promotes Bhakti Yoga in a serene environment.",
      link: "https://iskconujjain.com/",
    },
    {
      src: "/images/nearby/gopal-mandir.png",
      alt: "Gopal Mandir",
      title: "Gopal Mandir",
      description:
        "A historic temple dedicated to Lord Krishna, Gopal Mandir is celebrated for its architectural beauty and religious importance.",
      link: "https://en.wikipedia.org/wiki/Gopal_Mandir",
    },
    {
      src: "/images/nearby/Mahakallok.png",
      alt: "Mahakal Lok",
      title: "Mahakal Lok",
      description:
        "A newly developed corridor around Mahakaleshwar Temple, showcasing Ujjain's rich cultural and spiritual heritage through various attractions.",
      link: "https://ujjain.gov.in/en/tourist-place/mahakal-lok/",
    },
    {
      src: "/images/nearby/Baglamukhi-mandir.png",
      alt: "Baglamukhi Mata Mandir",
      title: "Baglamukhi Mata Mandir",
      description:
        "This temple, dedicated to Goddess Baglamukhi, is known for its spiritual power and unique rituals that attract devotees from far and wide.",
      link: "https://en.wikipedia.org/wiki/Baglamukhi",
    },
    {
      src: "/images/nearby/Dewas-tekri.png",
      alt: "Dewas Tekri",
      title: "Dewas Tekri",
      description:
        "A hilltop offering panoramic views of Ujjain, Dewas Tekri houses temples dedicated to Chamunda Mata and Tulja Bhavani.",
      link: "https://www.mptourism.com/dewas-tourism.html",
    },
    {
      src: "/images/nearby/Mangalnathtemple.jpeg",
      alt: "Mangalnath Temple",
      title: "Mangalnath Temple",
      description:
        "Believed to be the birthplace of Mars (Mangal), this temple is an important astrological and spiritual site attracting many visitors.",
      link: "https://en.wikipedia.org/wiki/Mangalnath",
    },
    {
      src: "/images/nearby/sandipani.jpg",
      alt: "Sandipani Ashram",
      title: "Sandipani Ashram",
      description:
        "An ancient hermitage where Lord Krishna and Sudama are said to have received their education from the revered Sage Sandipani.",
      link: "https://en.wikipedia.org/wiki/Sandipani",
    },
  ];

  return (
    <section id="nearbyAttraction" className="bg-[#f5f5f5] sm:py-[90px] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center pb-10">
          <h1 className="sm:text-4xl text-3xl font-bold text-black mb-2">
            <span className="text-[#0d726c]">Nearby Attractions</span>
          </h1>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the rich spiritual and cultural heritage of Ujjain with
            these nearby attractions:
          </p>
        </header>

        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper-container">
          {attractionImages.map((attraction, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow flex flex-col p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={attraction.src}
                      alt={attraction.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md cursor-pointer"
                      onClick={() => openImage(attraction.src)}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-grow mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex justify-end">
                    <Link href={attraction.link}>
                      <Button className="bg-green-600 text-white rounded-full p-2">
                        <PlusIcon className="text-white" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Full-screen"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
}

interface PlusIconProps {
  [key: string]: any;
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
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
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};
