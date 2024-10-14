"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" 
import Image from "next/image";
import Baglamukhi from "../images/templeimg/Baglamukhi mandir.png"
import Chintaman from "../images/templeimg/Chintaman Ganesh.jpg"
import dewas from "../images/templeimg/Dewas tekri.png"
import gopalMandir from "../images/templeimg/gopal-mandir.png"
// import harsiddhi from "../images/templeimg/harsiddhi-temple"
import iscon from "../images/templeimg/Iskon.jpg"
import kalBhairav from "../images/templeimg/kal-bhairav.png"
import mahakalLok from "../images/templeimg/Mahakal lok 1.png"
import mahakal from "../images/templeimg/Mahakal temple.jpg"
import mangalnath from "../images/templeimg/Mangalnath Temple, Ujjain.jpeg"
import sandipani from "../images/templeimg/sandipani.jpg"
import Link from "next/link"











export default function NearbyAtraction() {
  return (
    <section id="nearbyAttraction" className="">
        <div className="w-screen min-h-screen section7 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col  items-center mb-8">
          <h1 className="text-centersmall sectionHeadings text-5xl font-bold mb-7"><br/> <span className='text-[#0d726c]'>Nearby Attractions</span></h1> 
          <h2 className="text-centersmall text-lg text-gray-500">Explore the rich spiritual and cultural heritage of Ujjain with these nearby attractions:</h2>
          {/* <Button className="mt-4 bg-yellow-400 text-black ml-auto">View All Projects</Button> */}
        </header>
        <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
        <Card>
            <CardContent>
              <Image
                src={mahakal}
                alt="Rivanta Apartment Kitchen"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
              <div>
                  <h3 className="text-lg font-semibold">Mahakaleshwar Temple</h3>
                  <p className="text-sm text-gray-500">God Shiva is worshipped here as the ruler of time. It is one of the twelve Jyotirlingas and has a self-manifested Shivalinga, protecting Ujjain for ages.
                  </p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Mahakaleshwar_Jyotirlinga"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1801`}
                alt="Rivanta Apartment Kitchen"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Harsiddhi Temple</h3>
                  <p className="text-sm text-gray-500">This temple is known as a Shakti Peetha and is connected to the story of Sati. It was renovated during the Maratha period and shows centuries of deep devotion.                  </p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Mangalnath_Temple"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={Chintaman}
                alt="4 BHK Bungalow Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Chintaman Mandir</h3>
                  <p className="text-sm text-gray-500">A temple where god Ganesh removes all worries and blesses with prosperity. This 1,000-year-old temple on the banks of the Shipra River has been a place of peace for generations.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Chintaman_Ganesh_Temple,_Ujjain"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={kalBhairav}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Kaal Bhairav</h3>
                  <p className="text-sm text-gray-500">God Bhairav is the protector of Ujjain, where time and fear are under his control. This ancient temple, known for its tantric traditions, uniquely offers alcohol to the deity, showing Bhairav’s mystical powers.                  </p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Kal_Bhairav_Temple,_Ujjain"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card className="url('https://picsum.photos/1201/1800')">
            <CardContent>
              <Image
                src={sandipani}
                alt="Software Company Office"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Sandipani Ashram                  </h3>
                  <p className="text-sm text-gray-500">This is the holy place where god Krishna learned the arts under Sage Sandipani. The ashram, connected to ancient Vedic traditions.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Sandipani"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={mangalnath}
                alt="Rivanta Apartment Kitchen"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Mangalnath Temple</h3>
                  <p className="text-sm text-gray-500">The temple where devotees worship the energy of Mars to align the stars in their favor. This temple is believed to be the birthplace of Mars as mentioned in ancient astrological texts.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Mangalnath_Temple"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1802`}
                alt="4 BHK Bungalow Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Ram Ghat</h3>
                  <p className="text-sm text-gray-500">A peaceful part of the Shipra River where spiritual hymns and rituals are performed. One of the oldest ghats.it holds great importance for the Kumbh Mela, where millions come to take a holy dip.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Shipra_River"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={dewas}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Dewas Tekri</h3>
                  <p className="text-sm text-gray-500">A hilltop temple with a beautiful view of the sacred land. This ancient pilgrimage site, dedicated to Devi Tulja Bhavani, has been a symbol of faith for centuries.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Dewas_Tekri"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={Baglamukhi}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Baglamukhi Mandir</h3>
                  <p className="text-sm text-gray-500">Goddess Baglamukhi is worshipped here for her power to silence evil and grant victory. This ancient temple, part of tantric traditions, has been a place of protection for ages.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Bagalamukhi_Temple,_Nalkheda"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={iscon}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">ISKCON Temple</h3>
                  <p className="text-sm text-gray-500">A lively place of devotion where Lord Krishna&apos;s love is celebrated. Based on the teachings of the Bhagavad Gita, ISKCON Ujjain welcomes devotees from all over the world.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/International_Society_for_Krishna_Consciousness"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={gopalMandir}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Gopal Mandir</h3>
                  <p className="text-sm text-gray-500">A beautiful temple dedicated to god Dwarkadhish, where his divine presence enchants devotees. Built in the 19th century by the Scindia dynasty.</p>
                </div>
                <Link href="https://en.wikipedia.org/wiki/Gopal_Mandir"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={mahakalLok}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">Mahakal Lok</h3>
                  <p className="text-sm text-gray-500">A grand spiritual path that enhances the divine atmosphere of Mahakaleshwar. This newly created area brings together ancient history and modern spirituality, offering visitors a sacred experience.</p>
                </div>
                <Link href="https://hi.wikipedia.org/wiki/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%95%E0%A4%BE%E0%A4%B2_%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B2%E0%A5%8B%E0%A4%95"><Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
      </section>
  )
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
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


interface XIconProps {
  [key: string]: any;
}

const XIcon: React.FC<XIconProps> = (props) => {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
