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
import FaqComponent from "./FaqComponent";
import { CardChat } from "./CardChat/CardChat";
import { CardData, CardDataBottm } from "../utils/data";

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
    // The modal is conditionally rendered based on modalOpen
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
            <div className="relative bg-[#F7F8F9]  h-full">
              <div className="chat-box overflow-y-scroll h-60">
                {/* {CardChat} */}

                <div className="card-data">
                  <div className="mb-5">
                    <div class="grid grid-cols-2 gap-4 mb-4">
                      {CardData.map((card, index) => (
                        <CardChat
                          key={index}
                          title={card.title}
                          image={card.image}
                          pre={card.pre}
                          CardTextCenter="text-center"
                          // borderText="hidden"
                          commonButton="hidden"
                        />
                      ))}
                    </div>
                    <div className="w-full text-center">
                      <button className="bg-[#1D73F2] text-white px-5 py-2 rounded-full hover:bg-[#1D73F2] hover:text-[#fff]">
                        View All Options
                      </button>
                    </div>
                  </div>
                  {CardDataBottm.map((card, index) => (
                    <CardChat
                      key={index}
                      title={card.title}
                      image={card.image}
                      pre={card.pre}
                      bottomText={card.bottomText}
                      commonButton="hidden"
                      CardTextCenter="text-start"
                      borderHidden="border-2 border-b border-bottom mb-3"
                    />
                  ))}
                </div>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${
                      message.sender === "user" ? "user" : "bot"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}

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

                <div>
                  <MessageBox
                    imageSrc={star}
                    messageBody="What is the purpose of changing your flooring?."
                    customStyles="mt-3"
                  />
                  <FaqComponent
                    altText="dasds"
                    messageBody="Remodeling"
                    customStyles="   mt-3"
                  />
                </div>
              </div>
            </div>

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
                  alt="dsfdfd"
                  className="w-[34px] h-[34px] cursor-pointer"
                />
                <img
                  src={send}
                  alt="hfdgfv"
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
