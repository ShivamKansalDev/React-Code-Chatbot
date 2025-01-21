import { useNavigate } from "react-router-dom";
import homepageLogo from "../../../src/assets/home_bottom_icons.png";
import ChatModal from "../../Components/ChatModal/ChatModal";
import { useState } from "react";

const HomePage = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Open and close modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="absolute bottom-0 right-0">
        <img
          src={homepageLogo}
          alt="image"
          className="w-20 h-full cursor-pointer"
          onClick={openModal} // Add this to open the modal
        />
        <ChatModal modalOpen={modalOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
export default HomePage;
