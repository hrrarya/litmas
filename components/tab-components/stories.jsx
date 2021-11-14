import Story from "./story";

const Stories = () => {
  return (
    <div className="flex flex-wrap ">
      <Story>
        <img
          src="https://images.pexels.com/photos/7968303/pexels-photo-7968303.jpeg?cs=srgb&dl=pexels-george-pak-7968303.jpg&fm=jpg"
          alt="story one"
        />
      </Story>
      <Story>
        <img
          src="https://images.pexels.com/photos/9866757/pexels-photo-9866757.jpeg?cs=srgb&dl=pexels-alina-k-9866757.jpg&fm=jpg"
          alt="story one"
        />
      </Story>
      <Story>
        <img
          src="https://images.pexels.com/photos/9985770/pexels-photo-9985770.jpeg?cs=srgb&dl=pexels-zhuravleva-anastasia-9985770.jpg&fm=jpg"
          alt="story one"
        />
      </Story>
      <Story>
        <img
          src="https://images.pexels.com/photos/9406935/pexels-photo-9406935.jpeg?cs=srgb&dl=pexels-noah-munivez-9406935.jpg&fm=jpg"
          alt="story one"
        />
      </Story>
    </div>
  );
};

export default Stories;
