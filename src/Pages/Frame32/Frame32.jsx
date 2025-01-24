import UploadImage from "../../assets/images/house_upload.png";
import imageFile from "../../assets/images/upload-image-file.png";
import user from "../../assets/images/user.png";
import MessageUser from "../../Components/MessageBox";

export const Frame32 = () => {
  return (
    <div className="px-3 py-3">
      <div className="bg-white">
        <h6 className="text-dark font-bold mb-5">
          Upload your room photo for real time preview
        </h6>
        <div className="bg-[#F5F9FE] border-[#C0D8FB] rounded-lg flex flex-col justify-center items-center py-5 border-dotted border-2">
          <img
            src={UploadImage}
            alt="Upload your room image"
            className="w-16 h-auto"
          />
          <h6 className="font-semibold">Upload your room image</h6>
          <p className="text-[12px] text-[#727681]">
            Drop your image here, or
            <span className="text-[#1D73F2] ms-2">browse</span>
          </p>
        </div>
      </div>
      <div>
        <img
          src={user}
          alt="user"
          className="w-[30px] h-auto cursor-pointer absolute -right-2 mt-14"
        />
        <img
          src={imageFile}
          alt="Upload your room image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
