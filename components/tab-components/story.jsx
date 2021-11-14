const Story = ({ children }) => {
  return (
    <div className="stories_item w-1/3 px-2 overflow-hidden rounded">
      <div className="mb-3 h-44 bg-gray-300 relative flex overflow-hidden items-center">
        <div className="transition duration-200 stories_overlay absolute bg-gray-600 hover:bg-transparent cursor-pointer" />
        {children}
      </div>
    </div>
  );
};

export default Story;
