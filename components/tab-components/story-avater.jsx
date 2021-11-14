import Image from "next/image";
const StoryAvatar = () => {
  return (
    <div className="absolute top-0 px-1 py-2 flex items-center">
      <Image
        src="/images/user.svg"
        alt="avatar"
        width="35"
        height="35"
        className="story-avatar"
      />
      <h1 className="ml-2">Hridoy Mozumder</h1>
    </div>
  );
};

export default StoryAvatar;
