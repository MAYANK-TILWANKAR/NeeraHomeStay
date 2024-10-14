"use client";
import Image from "next/image";
import placeholder1 from "../images/download.jpeg";
import ServiceSlider from "../ui/serviceSlider"
import ac from "../images/icons/air-conditioner.png"
import bathroom from "../images/icons/male-and-female.png"
import family from "../images/icons/parents.png"
import parking from "../images/icons/garage.png"
import power from "../images/icons/generator.png"
import tea from "../images/icons/coffee-cup.png"
import toiletries from "../images/icons/toiletries.png"
import wifi from "../images/icons/travel.png"






const NewServices: React.FC = () => {
  const items = [
    { id:"1", text: 'Air Conditioner Rooms', active: false, icon: ac },
    { id:"2", text: 'Well-Hygiened Washrooms', active: true, icon: bathroom },
    { id:"3", text: 'Parking Space', active: false, icon:parking },
    { id:"4", text: 'Wi-Fi Connectivity', active: false, icon:wifi }
  ];
  const items2 = [
    { id:"1", text: 'Toiletries', active: false, icon:toiletries },
    { id:"2", text: 'Family Environment', active: false, icon:family },
    { id:"3", text: 'Power Backup', active: false, icon: power },
    { id:"4", text: 'Service', active: false, icon:tea }
  ];
    return (
        <section id="services" className="section3">
          <header className="flex flex-col  items-center mb-8 mt-10">
          <h1 className="text-centersmall sectionHeadings text-5xl font-bold mb-7">Explore Our <span className='text-[#12384b]'>Services</span></h1> 
          <h2 className="text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl text-black serviceText">Explore the rich spiritual and cultural heritage of Ujjain with these nearby attractions:</h2>
          {/* <Button className="mt-4 bg-yellow-400 text-black ml-auto">View All Projects</Button> */}
        </header>

        <div className="SmallServices part1">
        
            {items.map((item,index) => (<div key={index} className="circleServiceOut">
              <div className="circleService">
            <Image
              src={item.icon}
              alt="-"
              className="w-[60%] black-to-white"
              height="20"
              width="30"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            </div>
            <p className="servicep ">{item.text}</p>
            </div>
            ))}
        </div>
        <div className="SmallServices part2">
        
            {items2.map((item, index) => (<div key={index} className="circleServiceOut">
              <div className="circleService">
            <Image
              src={item.icon}
              alt="-"
              className="w-[60%] black-to-white"
              height="20"
              width="30"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            </div>
            <p className="servicep">{item.text}</p>
            </div>
            ))}
        </div>
        <ServiceSlider />
        </section>
    )}

    export default NewServices;