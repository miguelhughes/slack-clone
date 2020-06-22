import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ channels, onClick, activeChannelName }) => {
  return (
    <div className="sidebar">
      <ChannelGroup
        name="Channels"
        channels={channels.filter((c) => c.type === "channel")}
        onClick={onClick}
        activeChannelName={activeChannelName}
      />
      <ChannelGroup
        name="people"
        channels={channels.filter((c) => c.type === "dm")}
        onClick={onClick}
        activeChannelName={activeChannelName}
      />
    </div>
  );
};
Sidebar.propTypes = {
  channels: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  activeChannelName: PropTypes.string,
};
const ChannelGroup = ({ name, channels, onClick, activeChannelName }) => {
  return (
    <div className="channel-group">
      <span>{name}</span>
      <ul>
        {channels.map((c) => (
          <li
            key={c.name}
            onClick={() => onClick(c)}
            className={c.name === activeChannelName ? "selected" : ""}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
ChannelGroup.propTypes = {
  channels: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  activeChannelName: PropTypes.string.isRequired,
};

export default Sidebar;
