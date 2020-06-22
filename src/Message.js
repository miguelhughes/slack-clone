import React from "react";
import "./Message.css";
// import moment from "moment";
import PropTypes from "prop-types";

function Message({ message }) {
  return (
    <div className="message">
      <Avatar />
      <div className="content">
        <Author author={message.author} /> <Time time={message.timeStamp} />
        <Text text={message.text} />
      </div>
    </div>
  );
}
Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    timeStamp: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
function Avatar() {
  return <div className="avatar" />;
}

function Text({ text }) {
  return <div className="text">{text}</div>;
}
Text.propTypes = {
  text: PropTypes.string,
};
function Author({ author }) {
  return (
    <span className="author">
      <span className="name">{author}</span>
    </span>
  );
}
Author.propTypes = {
  author: PropTypes.string.isRequired,
};
const Time = ({ time }) => {
  return <span className="time">{time.toLocaleString()}</span>;
};
Time.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
};

export default Message;
