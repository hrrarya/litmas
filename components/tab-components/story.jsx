import { FaStar } from "react-icons/fa";
const Story = ({ children, status }) => {
  return (
    <div className="stories_item w-1/3 px-2 overflow-hidden rounded relative">
      <div className="mb-3 h-44 bg-gray-300 relative flex overflow-hidden items-center">
        <div className="transition duration-200 stories_overlay h-full bg-gray-600 hover:bg-transparent cursor-pointer" />
        {children}
      </div>
      {"favourite" === status && (
        <FaStar
          size={20}
          className="absolute top-0 right-0 mr-3 mt-2 text-yellow-500"
        />
      )}
    </div>
  );
};

export default Story;
