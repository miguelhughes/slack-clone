import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Conversation from "./Conversation";
import initialConversations from "./seed-data";
import ReadmeViewer from "@bit/miguelhughes.showcase.readme-viewer";
import "./App.css";

function App() {
  const [conversations] = useState(initialConversations);
  const [activeConversation, setActiveConversation] = useState(
    conversations[0].name
  );
  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation.name);
  };
  return (
    <div className="app">
      <ReadmeViewer repoName="slack-clone" />
      <Sidebar
        channels={conversations}
        activeChannelName={activeConversation}
        onClick={handleConversationClick}
      />
      {conversations.map((c) => (
        <Conversation
          key={c.name}
          active={c.name === activeConversation}
          conversation={c}
        />
      ))}
    </div>
  );
}

export default App;
