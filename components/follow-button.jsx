import React, { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";

const FollowButton = () => {
  const [loading, setLoading] = useState(false);
  const [followed, setFollowed] = useState(false);
  const handleFollowButton = () => {
    setLoading(true);
    setTimeout(() => {
      setFollowed(!followed);
      setLoading(false);
    }, 1000);
  };
  return (
    <button
      onClick={handleFollowButton}
      className={`text-sm py-2 mr-2 rounded px-${loading ? "6" : "4"} ${
        followed
          ? "bg-gray-700 hover:bg-gray-500"
          : "bg-blue-700 hover:bg-blue-500"
      }`}
    >
      {loading && <FaCircleNotch size={20} className="" />}
      <span className={`${loading && "hidden"}`}>
        {followed && !loading ? "Unfollow" : "Follow"}
      </span>
    </button>
  );
};

export default FollowButton;
