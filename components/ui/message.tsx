"use client";

export const Message = ({
  isUser,
  children,
}: {
  isUser: any;
  children: React.ReactNode | string | undefined | any;
}) => {
  return (
    <div
      className={` border rounded-lg m-1 w-44 p-2 ${
        isUser ? "self-end rounded-se-none" : "bg-teal-600 rounded-ss-none "
      }`}
    >
      {children}
    </div>
  );
};
