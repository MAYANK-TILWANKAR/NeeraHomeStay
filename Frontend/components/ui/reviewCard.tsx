import React from "react"
import "../../app/styles.css";
import Image from "next/image";
import Person1 from "../images/person1.jpg";

const ReviewCard: React.FC = () => {
    return(
        <>
            <div className="section7card">
            <div className="reviewCardTop">
            <div className="reviewImg">
            <Image
              src={Person1}
              alt="Professional Teams"
              className="rounded-full border-2 border-white"
              height="200"
              width="110"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            </div>
            </div>
            <div className="reviewCardBottom">
                <p className="text-lg">The Stay was one of the Coziest one&apos;s, The best  part was the Cleanliness <span className="font-[600] text-md text-[#0a7367]">-Aditya Sharma</span></p>
            </div>
          </div>
        </>
    )
}

export default ReviewCard;