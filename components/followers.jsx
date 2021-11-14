import Link from "next/link";
const Followers = () => {
  const followers = [
    {
      id: 1,
      avatar: "/images/user.svg",
      name: "Hridoy Mozumder",
      username: "hrrarya",
    },
    {
      id: 2,
      avatar: "/images/user.svg",
      name: "Rabin Paul",
      username: "rpaul",
    },
    {
      id: 3,
      avatar: "/images/user.svg",
      name: "Mamunur Rashid",
      username: "mrashid",
    },
    {
      id: 4,
      avatar: "/images/user.svg",
      name: "Liker Boy Lalu",
      username: "mainhoonlikerlalu",
    },
  ];
  return (
    <div className="followers">
      {followers.map((follower) => (
        <div className="followers__item bg-gray-300 text-black p-1 mb-2 rounded flex justify-between items-center hover:bg-gray-200">
          <div className="followers__left flex items-center">
            <img
              src={follower.avatar}
              alt="user avatar"
              className="w-8 h-8 border rounded-full border-gray-700 p-0.5 object-contain"
            />
            <div className="ml-2 flex flex-col">
              <h6 className="text-sm font-bold">{follower.name}</h6>
              <Link href="/">
                <a className="text-blue-700 text-xs font-semibold">
                  @{follower.username}
                </a>
              </Link>
            </div>
          </div>
          <div className="followers__right">
            <input
              type="submit"
              value="Unfollow"
              className="bg-blue-700 hover:bg-blue-500 px-2 py-1 rounded block text-white text-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Followers;
