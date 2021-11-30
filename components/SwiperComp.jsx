import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import StoryAvatar from "./tab-components/story-avater";

const SwiperComp = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-1/3 flex my-0 mx-auto">
      <Swiper slidesPerView={1} autoplay={{ delay: 10000 }}>
        <SwiperSlide>
          <StoryAvatar />
          <img
            src="https://images.pexels.com/photos/10166762/pexels-photo-10166762.jpeg?cs=srgb&dl=pexels-fadime-erbasss-10166762.jpg&fm=jpg"
            alt="girl's in the weading dress"
            className="story-image object-contain bg-gray-700 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoryAvatar />
          <img
            src="https://images.pexels.com/photos/7206527/pexels-photo-7206527.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7206527.jpg&fm=jpg"
            alt="girl's photoshoot"
            className="story-image object-contain bg-gray-700 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoryAvatar />
          <img
            src="https://images.pexels.com/photos/5839962/pexels-photo-5839962.jpeg?cs=srgb&dl=pexels-cottonbro-5839962.jpg&fm=jpg"
            alt="Friends forever"
            className="story-image object-contain bg-gray-700 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoryAvatar />
          <img
            src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-4380970.jpg&fm=jpg"
            alt="Girls photoshoot"
            className="story-image object-contain bg-gray-700 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StoryAvatar />
          <img
            src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?cs=srgb&dl=pexels-bruno-thethe-1910225.jpg&fm=jpg"
            alt="Colorfull creation"
            className="story-image object-contain bg-gray-700 rounded"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComp;
