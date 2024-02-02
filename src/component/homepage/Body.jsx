import { category } from "../itemData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import useProduct from "../../hook/useProduct";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";
import NotFoundPage from "../../pages/NotFoundPage";

function Body() {
  const { getProduct, product, loading, isError } = useProduct();
  const [limit, setLimit] = useState(48);
  const navigate = useNavigate();
  const searchProducts = "";

  useEffect(() => {
    getProduct(searchProducts, limit);
  }, [limit]);

  return (
    <div className=" bg-slate-100 py-5 border-t-2">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <img
            src="../../../img/th-50009109-4511584405faf59f920c914b3bee8be5.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <section className="w-full mt-5">
          <div className="text-slate-500 bg-white py-5 pl-5 border-t border-x">
            หมวดหมู่
          </div>
          {loading ? (
            <LoadingPage />
          ) : isError ? (
            <NotFoundPage />
          ) : (
            <Swiper
              slidesPerView={
                window.innerWidth >= 1024
                  ? 10
                  : window.innerWidth >= 600
                  ? 6
                  : window.innerWidth >= 480
                  ? 3
                  : 4
              }
              grid={{
                fill: "row",
                rows: 2,
                // rows: window.innerWidth >= 1024 ? 3 : 2,
              }}
              navigation={true}
              modules={[Grid, Navigation]}
              className=" w-full border-t border-r"
            >
              {category.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full border-b border-l hover:cursor-pointer hover:shadow-lg"
                    onClick={() => {
                      navigate(`products/category/${item.tag}`);
                    }}
                  >
                    <div className="flex flex-col  items-center pt-3 px-2 h-[150px] bg-white">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[83px] h-[88px]"
                      />
                      <p className="text-center text-sm">{item.title}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </section>
        <section className="mt-10">
          <div className="">
            <p className="bg-white text-[#ee4d2d] font-black text-base text-center py-5 border-b-4 border-[#ee4d2d] sticky top-28 max-md:top-20 z-10">
              สินค้าแนะนำประจำวัน
            </p>
            <div className="mt-2 grid grid-cols-6 gap-5 max-lg:gap-0 max-lg:grid-cols-4 max-sm:grid-cols-2 max-sm:gap-0 max-md:grid-cols-3 max-md:gap-1">
              {product.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="  border border-gray-200 bg-white relative hover:border hover:border-[#ee4d2d] hover:-translate-y-1 w-[195px] hover:cursor-pointer max-md:w-full"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt=""
                      className=" h-[186px] border-b"
                    />
                    <div className="p-2 h-[104px] flex flex-col justify-between">
                      <p>{item.title}</p>

                      <span className="flex justify-between ">
                        <span className="text-[#ee4d2d] text-md">
                          ฿{item.price}
                        </span>
                        <span className=" text-sm text-slate-500">
                          ขายแล้ว NaN ชิ้น
                        </span>
                      </span>
                    </div>
                    <span className="text-xs bg-yellow-200 text-[#ee4d2d] p-1 absolute top-0 right-0">
                      {item.discountPercentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-7">
          <button
            className="rounded-sm text-slate-500 py-2 px-5 border bg-white "
            onClick={() => {
              setLimit(limit + 48);
            }}
          >
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
