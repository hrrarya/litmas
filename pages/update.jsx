const Update = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // here call ajax server request to update user data
  };
  return (
    <div className="update_section">
      <h1 className="text-3xl mb-4 text-center border-b py-1">
        Update Profile
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-wrap text-black">
          <div className="w-1/2 pr-2 mb-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full p-2 rounded"
            />
          </div>
          <div className="w-1/2 mb-4">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="w-full p-2 rounded"
            />
          </div>
          <div className="w-full mb-4">
            <textarea
              className="w-full p-2 rounded"
              placeholder="Bio"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Update"
            className="bg-blue-700 hover:bg-blue-500 px-2 py-1 rounded block text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
