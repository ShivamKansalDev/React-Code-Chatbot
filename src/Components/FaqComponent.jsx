import React from "react";

function FaqComponent({ imageSrc, altText , messageTitle, messageBody, customStyles = "" }) {

  return (
    <div className={`flex   rounded-[12px]   gap-[10px] ${customStyles}`}>

        
      <div className="   bg-white  p-[12px] rounded-[12px]">
      {messageTitle && <p className="font-bold">{messageTitle}</p>}
        <p>{messageBody}</p>
      </div>
     
        
        {/* <img
            src={imageSrc}
            alt={altText}
            className="w-[26px] h-[26px] cursor-pointer"
        /> */}


 
    </div>
  );
}

export default FaqComponent;
