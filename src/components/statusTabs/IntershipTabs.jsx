import React from "react";
import img1 from '../../assets/images/details_2.png';
import img2 from '../../assets/images/criteria.svg';
import img3 from '../../assets/images/roles.svg';
import img4 from '../../assets/images/expectation.svg';




export default function ImageButtons() {
  const images = [img1, img2, img3, img4];


  return (
    <div className="flex flex-wrap gap-5 p-4 border-b border-[#D8DAE5] mb-5">
      {images.map((image, index) => (
        <button
          key={index}
          className=" overflow-hidden transition  group "
        >
          <img

            src={image}
            alt={`Option ${index + 1}`}
            className="h-[24px] object-cover hover:border-b-4 hover:border-[hsl(181,65%,40%)]  " />



        </button>
      ))}
    </div>
  );
}

