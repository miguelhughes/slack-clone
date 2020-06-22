import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import "./Conversation.css";
const currentUser = "Myself";

function generateInitialMessages(conversation) {
  let participants;
  if (conversation.type === "channel")
    participants = ["Dave", "Sarah", "Zack", "Pam", "Erin", "Joe"];
  else participants = [conversation.name, currentUser];

  let messages = [];
  const count = 15;
  const spreadSeconds = Math.random() * 120;
  let lastMessageStamp = 0;
  while (messages.length < count) {
    let seconds = Math.random() * spreadSeconds;
    lastMessageStamp += Math.round(seconds);
    const authorIndex = Math.round(Math.random() * (participants.length - 1));
    const author = participants[authorIndex];
    const stamp = Date.now() - lastMessageStamp * 1000;

    const message = {
      author: author,
      timeStamp: new Date(stamp),
      text: "A message from " + author,
      id: messages.length,
    };
    messages.unshift(message);
  }

  return messages;
}
function scrollBottom(elementQuery) {
  const element = document.querySelector(elementQuery);
  element.scrollTop = element.scrollHeight;
}
const Conversation = ({ active, conversation }) => {
  const [messages, setMessages] = useState(
    generateInitialMessages(conversation)
  );
  useEffect(() => {
    if (active) scrollBottom(".messages");
  }, [messages, active]);

  const handleAddedMessage = (addedText) => {
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          author: currentUser,
          text: addedText,
          timeStamp: new Date(),
          id: prevMessages.length,
        },
      ];
    });
  };

  if (!active) {
    return null;
  } else {
    return (
      <div className="main">
        <div className="messages">
          {messages.map((m) => (
            <Message key={m.id} message={m} />
          ))}
        </div>
        <MessageInput onAddedMessage={handleAddedMessage} />
      </div>
    );
  }
};
const MessageInput = ({ onAddedMessage }) => {
  const inputRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newText = inputRef.current.value;
    inputRef.current.value = "";
    onAddedMessage(newText);
  };
  return (
    <div className="message-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type your message here. Press Enter to send."
        />
      </form>
    </div>
  );
};
MessageInput.propTypes = {
  onAddedMessage: PropTypes.func.isRequired,
};
export default Conversation;
