import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/star.png";
import user from "../../assets/images/user.png";
import location from "../../assets/images/location.png";
import MessageUser from "../../Components/MessageBox";
import rightIcon from "../../assets/images/arrow-icons.png";
import rightArrow from "../../assets/images/rightArrow.png";
import { CardData2 } from "../../utils/data";
import FaqComponent from "../../Components/FaqComponent";
import { CardChat } from "../../Components/CardChat/CardChat";

const Frame41 = () => {
  return (
    <>
      <FaqComponent
        altText="dasds"
        messageBody="Synthetic PVC"
        customStyles="   mt-3"
        imageSrc={rightArrow}
        text="Budget Friendly"
      />
      <FaqComponent
        altText="dasds"
        messageBody="Natural Wood"
        customStyles="   mt-3"
        imageSrc={rightArrow}
        text="Expensive"
      />
      <FaqComponent
        altText="dasds"
        messageBody="All Product"
        customStyles="mt-3"
        imageSrc={rightArrow}
        text="No Limit"
      />

      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Synthetic PVC."
      />
      <MessageBox
        imageSrc={star}
        messageBody="Which design preference do you have in mind for your bathroom countertops?."
        customStyles="mt-3"
      />

      <div>
        <div className="bg-white rounded-lg p-2">
          <div class="grid grid-cols-3 gap-4 mb-4">
            {CardData2.map((card, index) => (
              <CardChat
                key={index}
                title={card.title}
                image={card.image}
                pre={card.pre}
                CardTextCenter="text-center"
                rightIcon={rightIcon}
                // borderText="hidden"
              />
            ))}
          </div>
        </div>
      </div>

      <MessageUser
        imageSrc={user}
        customStyles="mt-5"
        messageBody="Not Sure."
      />
    </>
  );
};

export default Frame41;
