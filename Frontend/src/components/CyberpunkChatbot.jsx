import { useState } from "react";
import "../styles/CyberpunkChatbot.css";
import { FaTimes } from "react-icons/fa";

const CyberpunkChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    { sender: "bot", text: "Greetings, traveler. Welcome to Neo-Sabah." },
    { sender: "bot", text: "How can I assist you in this neon-drenched paradise?" },
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cyber-fab-container">
      <button className="cyber-fab" onClick={toggleOpen} aria-label="Open Chatbot">
        {isOpen ? (
          <FaTimes />
        ) : (
          <img
            src="/assets/elephant-16bit.png" // Placeholder image
            alt="Cyber Elephant"
            className="cyber-fab-icon"
          />
        )}
      </button>
      {isOpen && (
        <div className="cyber-chat-window">
          <div className="cyber-chat-header">
            <h3>Cyber Elephant</h3>
            <button onClick={toggleOpen}>
              <FaTimes />
            </button>
          </div>
          <div className="cyber-chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`cyber-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CyberpunkChatbot;
