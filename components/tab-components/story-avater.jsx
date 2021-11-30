import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const StoryAvatar = () => {
  const [favourite, setFavourite] = useState(false);
  const handleFavourite = () => {
    setFavourite(!favourite);
  };
  return (
    <div className="absolute top-0 p-2 flex items-center justify-between w-full">
      <div className="flex items-center">
        <Image
          src="/images/user.svg"
          alt="avatar"
          width="35"
          height="35"
          className="story-avatar"
        />
        <h1 className="ml-2">Hridoy Mozumder</h1>
      </div>
      <button onClick={handleFavourite}>
        <FaStar
          size={20}
          className={`${favourite ? "text-yellow-200" : "text-gray-500"}`}
        />
      </button>
    </div>
  );
};

export default StoryAvatar;
