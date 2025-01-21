// src/Chatbot.js
import React, { useState } from "react";
import star from "../assets/images/star.png";
import "./ChatBotModal.css";

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

        <div className="relative bg-[#F7F8F9]  h-full">
          <div className="chat-box overflow-y-scroll h-60">
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

            <div className="input-container absolute bottom-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Write a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>

        {/* Close button to close the modal */}
        {/* <button onClick={closeModal} className="close-modal">
          X
        </button> */}
      </div>
    )
  );
};

export default ChatBotModal;
