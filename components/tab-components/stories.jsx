import Story from "./story";

const Stories = ({ status = "" }) => {
  const storyObj = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/7968303/pexels-photo-7968303.jpeg?cs=srgb&dl=pexels-george-pak-7968303.jpg&fm=jpg",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/9866757/pexels-photo-9866757.jpeg?cs=srgb&dl=pexels-alina-k-9866757.jpg&fm=jpg",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/9985770/pexels-photo-9985770.jpeg?cs=srgb&dl=pexels-zhuravleva-anastasia-9985770.jpg&fm=jpg",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/9406935/pexels-photo-9406935.jpeg?cs=srgb&dl=pexels-noah-munivez-9406935.jpg&fm=jpg",
    },
  ];
  return (
    <div className="flex flex-wrap ">
      {storyObj.map((story) => (
        <Story key={story.id} status={status}>
          <img src={story.image} alt="story one" />
        </Story>
      ))}
    </div>
  );
};

export default Stories;
