import React from "react";

const Message = ({ isQuestion, content }: any) => {
  return (
    <div
      className={` border rounded-lg m-1 w-44 p-2 ${
        isQuestion ? "self-end rounded-se-none" : "bg-teal-600 rounded-ss-none "
      }`}
    >
      {content}
    </div>
  );
};

export default Message;
