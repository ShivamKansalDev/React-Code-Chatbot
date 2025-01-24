import React from "react";

function MessageBox({
  imageSrc,
  altText,
  messageTitle,
  messageBody,
  img,
  customStyles = "",
}) {
  return (
    <div className={`flex gap-[10px] ${customStyles} `}>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={altText}
          className="w-[35px] h-auto cursor-pointer absolute -left-5 mt-1"
        />
      ) : (
        <div className="w-[26px] h-[26px]"></div> // Empty div placeholder
      )}
      <div className="bg-white p-[12px] rounded-[12px]">
        {messageTitle && <p className="">{messageTitle}</p>}
        <p className=" ">{messageBody}</p>
        {img && (
          <img
            src={img}
            alt={altText}
            className="w-[90px] h-[41px] cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default MessageBox;
