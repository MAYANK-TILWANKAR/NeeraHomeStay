"use client";
import Image from "next/image";
import placeholder1 from "../images/download.jpeg";
import ac from "../images/ac.png";
import clean from "../images/clean.png"
import parking from "../images/parking.png"
import wifi from "../images/wifi.png"
import games from "../images/games.png"
import family from "../images/family.png"

const Services: React.FC = () => {
  const items = [
    { text: 'Air Conditioner Rooms', active: false, icon: ac },
    { text: 'Well-Hygiened Washrooms', active: true, icon:clean },
    { text: '2 and 4-Wheeler Parking Spaces', active: false, icon:parking },
    { text: 'Wi-Fi Connectivity', active: false, icon:wifi },
    { text: 'Play and Fun Games', active: false, icon:games },
    { text: 'Family Environment', active: false, icon:family }
  ];
    return (
        <section id="services" className="section3">
          <div className="topsection3">
              <div className="lefttopsection3">
              <h1 className="section3Heading md:sectionHeadings text-center text-white md:ml-5 ml-7 sectionHeadings w-[30.5rem] font-bold mb-4"><span className='text-yellow-500'>Explore Our </span>HomeStay Services</h1>
              <p className='pp text-justify text-white w-[40vw] md:ml-5 ml-7 text-lg sm:text-md'>We provide a range of exceptional services and amenities designed to make your stay comfortable and memorable.</p>
              </div>
              <a href="#contactUs">
              <button className='exploreMoreBtn3 bg-yellow-500 text-black'>
                  Book Now 
              </button>
              </a>
          </div>
          <div className="bottomsection3">
              <div className="section3card">
                <h1 className='text-2xl sm:text-3xl font-bold mb-4'>One-Way Free Drop to Mahakaleshwar Temple</h1>
                <p className='text-sm'>Enjoy a complimentary ride to the temple for a hassle-free visit. </p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>

              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>Yoga and Meditation Spot</h1>
                <p className='text-sm'>Relax and rejuvenate in our dedicated space for yoga and meditation.</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>

              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>Books and Reading Materials</h1>
                <p className='text-sm'>Browse through a collection of books and reading materials to unwind during your stay.</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>
              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>Personal Customized Travel Plans or Itinerary</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>
          </div>
          
          <div>
      <ul className="bullet-point">
        {items.map((item, index) => (
          <li key={index} className={""}>
            <p className="text-black flex flex-row mb-5"><span className="textsizeservices1 bold">
            <Image
              src={item.icon}
              alt="-"
              className="w-8 mr-6 mt-2"
              height="20"
              width="30"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </span> {item.text}</p>
          </li>
        ))}
      </ul>
    </div>
        </section>
    )}

    export default Services;