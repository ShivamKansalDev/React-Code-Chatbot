import React from "react";
import MessageBox from "../MessageBox";
import star from "../../assets/images/star.png";
import user from "../../assets/images/user.png";
import location from "../../assets/images/location.png";
import MessageUser from "../MessageUser";
import rightIcon from "../../assets/images/arrow-icons.png";
import { CardWithLocation } from "../../utils/data";

const Frame40 = () => {
  return (
    <>
      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Synthetic PVC."
      />
      <MessageBox
        imageSrc={star}
        messageBody="Could you please share your zip code or city so I can find the nearest store for you?."
        customStyles="mt-3"
      />
      <MessageUser imageSrc={user} customStyles="mt-5" messageBody="30318" />
      <MessageBox
        imageSrc={star}
        messageBody="The closest MSI showroom and MSI dealers to you are as follows:"
        customStyles="mt-3"
      />

   

      {CardWithLocation.map((item, index) => (
        <div key={index} className="flex bg-white p-2 rounded-xl gap-3 mt-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-[40px] h-[40px] cursor-pointer"
          />
          <div>
            <p>{item.title}</p>
            <p>{item.pre}</p>

            <div className="flex gap-2 mt-3">
              <button className="text-[#1D73F2] border-0  bg-[#1D73F20F] rounded-full hover:bg-[#1D73F2] hover:text-[#fff] px-4 py-1">
                {item.bottomText}
              </button>

              <button className="flex items-center gap-1 text-[#1D73F2] border border-[#1D73F2] py-1 px-[10px] rounded-full hover:bg-[#1D73F2] hover:text-[#fff]">
                Get Direction
                <img className="w-4 h-4" src={rightIcon} alt="rightIcon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Frame40;
