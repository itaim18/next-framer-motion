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
      className={` ${
        isUser
          ? "self-end rounded-se-none border rounded-lg m-1 w-44 p-2"
          : " rounded-ss-none "
      }`}
    >
      {children}
    </div>
  );
};
