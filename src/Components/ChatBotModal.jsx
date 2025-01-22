// src/Chatbot.js
import React, { useState } from "react";
import star from "../assets/images/star.png";
import send from "../assets/images/send.png";
import user from "../assets/images/user.png";
import attachment from "../assets/images/attachment.png";
import loadingImage from "../assets/images/loadingImage.png";
import "./ChatBotModal.css";
import MessageBox from "./MessageBox";
import ImageComponent from "./ImageComponent";
import MessageUser from "./MessageUser";

const ChatBotModal = ({ modalOpen, closeModal }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);

      // Simple bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I help you?", sender: "bot" },
        ]);
      }, 1000);

      setInput("");
    }
  };

  return (
     
    modalOpen && (
      <div className="chatbot-container">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={star}
            alt="arrow down"
            className="w-16 h-full cursor-pointer"
          />
          <div>
            <p className="font-medium text-xl">MSI AI Assistant</p>
            <p className="text-[#727681]">We are online to assist you</p>
          </div>
        </div>

        <div className="relative bg-[#F7F8F9] rounded-[18px]  h-[559px]">
          <div className="chat-box overflow-y-scroll h-[493px]">
                 <MessageBox 
                    imageSrc={star} 
                    messageTitle="Hi there!" 
                    messageBody="I'm MSI Chatbot. Your guide for surfaces." 
                  />
                  <MessageBox 
                    messageBody="Please choose an option to begin:" 
                    customStyles="mt-3"
                  />
                  <div className="flex justify-between gap-3 px-[40px]">
                  <ImageComponent />
                  <ImageComponent />
                  </div>
                  

                  <MessageUser 
                    imageSrc={user}  
                    customStyles="mt-16"
                    messageBody="Flooring." 
                  />

                  <MessageBox 
                    imageSrc={star}   
                    altText='fsdfds'
                    img={loadingImage}
                  />

                  


            <div className="flex items-center input-container absolute bottom-4 w-[656px] h-[56px] rounded- [12px] border  ">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Write a message..."
              />
            
              <div className="flex">
              <img
              src={attachment}
              alt= 'dsfdfd'
              className="w-[34px] h-[34px] cursor-pointer"
            />
              <img
                src={send}
                alt='hfdgfv'
                className="w-[40px] h-[40px] cursor-pointer"
              /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatBotModal;
