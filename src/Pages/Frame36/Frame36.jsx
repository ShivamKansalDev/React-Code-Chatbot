import React from "react";
import MessageBox from "../../Components/MessageBox";
import star from "../../assets/images/star.png";
import FaqComponent from "../../Components/FaqComponent";
import rightArrow from "../../assets/images/rightArrow.png";
import MessageUser from "../../Components/MessageUser";
import user from "../../assets/images/user.png";
import TabsCard from "../../Components/Tabs/TabsCard";

const Frame36 = () => {
  return (
    <>
      <div className="Frame36">
        <div className="mb-5">
          <FaqComponent
            altText="dasds"
            messageBody="Show similar products"
            customStyles="mt-3"
            imageSrc={rightArrow}
            text="Budget Friendly"
          />
          <FaqComponent
            altText="dasds"
            messageBody="See lighter product options"
            customStyles="mt-3"
            imageSrc={rightArrow}
            text="Expensive"
          />
          <FaqComponent
            altText="dasds"
            messageBody="See darker product options"
            customStyles="mt-3"
            imageSrc={rightArrow}
            text="No Limit"
          />
        </div>
        <div className="mb-5">
          <MessageUser
            imageSrc={user}
            customStyles="mt-5"
            messageBody="Know more about the product"
          />
        </div>
        <div className="mb-5">
          <MessageBox
            imageSrc={star}
            messageBody="Here are the detailed specifications for the Akadia Luxury Vinyl Flooring:"
          />
        </div>
        <div className="pb-5">
          <TabsCard />
        </div>
      </div>
    </>
  );
};

export default Frame36;
