"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/parallax";
import img from "/gallery/1.jpg"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  const openImage = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };
  

  return (
    <section className="bg-white   sm:py-[90px] py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-10">
          <h2 className="sm:text-4xl text-3xl font-bold text-black mb-2   ">
            Our Gallery
          </h2>
          <p className="sm:text-lg text-base text-gray-600">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
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
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/2.jpg"
                alt="Bathroom"
                onClick={() => openImage("/gallery/2.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/3.jpg"
                alt="Bedroom"
                onClick={() => openImage("/gallery/3.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bathroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/4.jpg"
                alt="Balcony"
                onClick={() => openImage("/gallery/4.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/6.jpg"
                alt="Bedroom"
                onClick={() => openImage("/gallery/6.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/7.jpg"
                alt="Balcony"
                onClick={() => openImage("/gallery/7.jpg")}
              />
              <div className="text-center mt-4 font-semibold text-gray-700">
                Bedroom
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/8.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/8.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Television
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/9.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/9.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Air Conditioner 
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/11.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/11.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Reading Light
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/12.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/12.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Game Zone
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/13.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/13.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Meditation Spot
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/22.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/22.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Balcony
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/23.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/23.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Beauty
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/24.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/24.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Exterior
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/27.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/27.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Interior
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                className="w-full h-96 object-cover cursor-pointer"
                src="/gallery/28.jpg"
                alt="Toilet"
                onClick={() => openImage("/gallery/28.jpg")}
              />

              <div className="text-center mt-4 font-semibold text-gray-700">
                Family Friendly Environment 
              </div>
            </div>
          </SwiperSlide>
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
};

export default Gallery;
