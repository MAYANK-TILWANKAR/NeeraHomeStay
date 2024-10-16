import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutUs" className="py-16 bg-gray-50 px-5">
      <div className="container mx-auto px-4">
        <Marquee className="mb-12 py-4 bg-white shadow-md rounded-lg">
          {[
            "Sacred",
            "Ancient",
            "Serene",
            "Spiritual",
            "Peaceful",
            "Tranquil",
            "Calm",
            "Comfortable",
            "Relaxing",
            "Refreshing",
            "Inviting",
            "Welcoming",
            "Homey",
            "Cozy",
          ].map((word, index) => (
            <span
              key={index}
              className="mx-4 text-lg font-medium text-gray-700">
              ✨ {word}
            </span>
          ))}
        </Marquee>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-[#0d726c]">Neera</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              muted
              controls
              preload="metadata"
              autoPlay
              loop>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              &quot;Neera: The Guest House&quot; was born from a desire to
              create a space that feels like home for travelers seeking both
              comfort and a deeper connection with Ujjain&apos;s spiritual
              essence. We chose the term &quot;Guest House&quot; to emphasize
              our commitment to providing a warm, welcoming environment, much
              like the traditional Indian concept of &apos;Atithi Devo
              Bhava&apos; (Guest is God).
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 hidden md:block">
              A guest house offers a more personal touch, where every visitor is
              treated as a cherished guest in our home. Our name,
              &quot;Neera,&quot; inspired by the purity of water, reflects the
              calm and refreshing experience we strive to offer each guest.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed hidden md:block">
              Our aim is to create a sanctuary where you feel more like a guest
              in a loved one&apos;s home, surrounded by care and tranquility.
              Our goal is to make you feel like a special guest in a loved one's
              home, with plenty of care and peace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
