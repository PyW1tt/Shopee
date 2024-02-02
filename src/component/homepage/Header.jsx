import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { carouselImg, banners } from "../itemData";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto pt-8 pb-5">
      <div className="flex max-lg:flex-wrap ">
        <Swiper
          navigation={true}
          centeredSlides={true}
          pagination={{
            clickable: false,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          className="mySwiper w-4/6 h-60 max-lg:w-full max-sm:h-full"
        >
          {carouselImg.map((item, index) => (
            <SwiperSlide key={index} className="hover:cursor-pointer ">
              <img src={item.img} alt="" className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" w-1/3 flex flex-col justify-between ml-1  max-lg:w-full max-lg:flex-row max-sm:flex-col">
          <img
            src="../../../img/th-50009109-2ecdfec894997eb9584e587fcf42a164_xhdpi.jpg"
            alt=""
            className="hover:cursor-pointer h-[115px] w-full  max-lg:w-1/2 max-sm:w-full"
          />
          <img
            src="../../../img/th-50009109-9d170de5facc869f15ad89a34273eede_xhdpi.jpg"
            alt=""
            className="hover:cursor-pointer h-[115px] max-lg:w-1/2 max-sm:w-full"
          />
        </div>
      </div>
      {/* <div className=" mt-5 flex w-full "> */}
      <div className=" mt-5 flex w-full max-lg:grid max-lg:grid-rows-2 max-lg:grid-flow-col max-sm:grid-rows-4">
        {banners.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center hover:cursor-pointer hover:-translate-y-1 w-full"
            >
              <img src={item.img} alt="" width={45} height={45} />
              <p className="text-xs w-[100px] text-center mt-2">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
