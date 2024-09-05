import React from 'react';

const Chat = ({ name, message, timestamp,mine }) => {
  return (
    <div className="chat-message p-2 border-b">
      <div className="flex items-center justify-between">
        <strong className={`${mine?"text-green-300":""}`}>{name}</strong>
        <span className="text-gray-500 text-xs">{timestamp}</span>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Chat;
