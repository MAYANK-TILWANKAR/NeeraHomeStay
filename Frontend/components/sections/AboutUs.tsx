import Image from "next/image";
import placeholder1 from "../images/download.jpeg";
import Marquee from "react-fast-marquee";

const AboutUs: React.FC = () => {
    return (
        <section id="aboutUs" className='section2'>
          <div className="starStrip">
          <Marquee direction="right" className="flex w-[100%]">
          <p>✨</p> <p>Sacred</p> <p>✨</p> <p>Ancient</p> <p>✨</p> <p>Serene</p> <p>✨</p> <p>Spiritual</p> <p>✨</p><p>✨</p> <p>Sacred</p> <p>✨</p> <p>Ancient</p> <p>✨</p> <p>Serene</p> <p>✨</p> <p>Spiritual</p> <p>✨</p><p>✨</p> <p>Sacred</p> <p>✨</p> <p>Ancient</p> <p>✨</p> <p>Serene</p> <p>✨</p> <p>Spiritual</p> <p>✨</p><p>✨</p> <p>Sacred</p> <p>✨</p> <p>Ancient</p> <p>✨</p> <p>Serene</p> <p>✨</p> <p>Spiritual</p> <p>✨</p><p>✨</p> <p>Spiritual</p> <p>✨</p>
          </Marquee>
          </div>
          

          <div className="section2-1">
          <h1 className="text-center mt-10 sectionHeadings font-bold">About<span className='text-[#0d726c]'> Neera </span></h1>
          <div className="leftsection2">
          {/* <Image
              src="https://picsum.photos/601/1060"
              alt="Professional Teams"
              className="section1img"
              height="600"
              width="300"
              style={{ objectFit: "cover" }}
            /> */}
            <video width="420" height="740" muted controls preload="metadata" autoPlay>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
    Video not supported.
</video>

          </div>
          <div className="rightsection2">
            <p className="section2subheading text-justify text-gray-700 mb-8">
            &quot;Neera: The Guest House&quot; was born from a desire to create a space that feels like home for travelers seeking both comfort and a deeper connection with Ujjain&apos;s spiritual essence. We chose the term &quot;Guest House&quot; to emphasize our commitment to providing a warm, welcoming environment, much like the traditional Indian concept of &apos;Atithi Devo Bhava&apos; (Guest is God). A guest house offers a more personal touch, where every visitor is treated as a cherished guest in our home. Our name, &quot;Neera,&quot; inspired by the purity of water, reflects the calm and refreshing experience we strive to offer each guest. Our aim is to create a sanctuary where you feel more like a guest in a loved one&apos;s home, surrounded by care and tranquility.Our goal is to make you feel like a special guest in a loved one’s home, with plenty of care and peace.
          </p>
            {/* <div className="section2numbers flex justify-between mb-4 space-x-12">
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">6500+</span>
                  <p className="text-gray-700 mt-2">Projects Completed</p>
                </div>
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">60</span>
                  <p className="text-gray-700 mt-2">Expert Cleaners</p>
                </div>
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">99%</span>
                  <p className="text-gray-700 mt-2">Satisfied Customers</p>
                </div>
              </div> */}
          </div>
          </div>
        </section>
    )
}


export default AboutUs; 