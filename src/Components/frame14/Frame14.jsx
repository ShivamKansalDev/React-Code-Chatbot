import React from 'react'
import MessageBox from '../MessageBox'
import ImageComponent from '../ImageComponent'
import star from "../../assets/images/star.png";
import user from "../../assets/images/user.png";
import MessageUser from '../MessageUser';
import loadingImage from "../../assets/images/loadingImage.png";


const Frame14 = () => {
  return (
    <>
          <MessageUser
                        imageSrc={user}
                        customStyles="mt-16"
                        messageBody="Flooring."
                      />
      
                      <MessageBox
                        imageSrc={star}
                        altText="fsdfds"
                        img={loadingImage}
                      />
    </>
  )
}

export default Frame14