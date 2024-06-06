import React, { useState } from "react";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getBotResponse = (userText) => {
    const lowerCaseText = userText.toLowerCase();
    if (lowerCaseText.includes("hello")) {
      return "Hi there! How can I assist you today?";
    } else if (lowerCaseText.includes("help")) {
      return "Sure, I'm here to help! What do you need assistance with?";
    } else if (lowerCaseText.includes("hi")) {
      return "Hi there! How can I assist you today?";
    } else if (lowerCaseText.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm not sure how to respond to that. Can you please provide more details?";
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-teal-900 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-8 z-[999] w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col h-full">
            <div className="flex-1 overflow-auto mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-1 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 text-black self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-teal-900 text-white rounded-r-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bot;
