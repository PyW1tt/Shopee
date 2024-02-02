import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import useProduct from "../hook/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useAddProduct } from "../context/productContest";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";

function ProductId() {
  const param = useParams();
  const { getProductById, productById, loading, isError } = useProduct();
  const { navgateProduct } = useAddProduct();

  const initialPrice = productById.price;
  const discountPercentage = productById.discountPercentage;
  const discountedPrice =
    initialPrice - initialPrice * (discountPercentage / 100);

  const rating = productById.rating;
  function renderRating() {
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;

    const stars = [];
    for (let i = 0; i < integerPart; i++) {
      stars.push(
        <img
          src="../../icon/Star_full.svg"
          alt=""
          width={20}
          height={20}
          className=""
        />
      );
    }
    if (decimalPart >= 0.5) {
      stars.push(
        <img
          src="../../icon/Star_half.svg"
          alt=""
          width={20}
          height={20}
          className=""
        />
      );
    }

    return stars;
  }

  useEffect(() => {
    getProductById(param.id);
  }, [navgateProduct]);
  return (
    <>
      <NavBar />
      {loading ? (
        <LoadingPage />
      ) : isError ? (
        <NotFoundPage />
      ) : (
        <>
          <section className="bg-slate-100 pt-10 pv-5">
            <div className="bg-white max-w-screen-xl mx-auto p-5 flex max-lg:flex-wrap ">
              <div className="w-[450px] p-4 max-lg:w-full  ">
                <img
                  src={productById.thumbnail}
                  alt=""
                  className="w-[450px] h-[450px] max-lg:w-full max-md:h-[250px]"
                />
                <div className="mt-1 ">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={5}
                    spaceBetween={1}
                    className=""
                  >
                    {productById?.images?.map((item, index) => (
                      <SwiperSlide key={index} className="w-full ">
                        <img src={item} alt="" className="w-[82px] h-[82px]" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className=" px-10 w-2/3 max-lg:w-full max-lg:px-0">
                <div className="text-xl">{productById.title}</div>
                <div className="flex items-center mt-2">
                  <span className="underline text-[#ee4d2d]">
                    {productById.rating}
                  </span>
                  &nbsp;
                  <span className="flex ">{renderRating()}</span>
                  <span className="mx-5">|</span>
                  <span className="underline">NaN</span> &nbsp;
                  <span className="text-slate-500">Ratings</span>
                  <span className="mx-5">|</span>
                  <span className="text-slate-500">NaN Sell</span>
                </div>
                <div className="flex items-center bg-slate-100 w-full p-3 my-3">
                  <span className="line-through text-slate-500">
                    ฿{productById.price}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#ee4d2d] text-3xl">
                    ฿{discountedPrice.toFixed(2)}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-xs text-white bg-[#ee4d2d] font-bold rounded-sm">
                    {productById.discountPercentage}% ส่วนลด
                  </span>
                </div>
                <div className="text-sm my-10">
                  <span>โค้ดส่วนลดจากร้านค้า</span>&nbsp;&nbsp;
                  <span className="ml-5">NaN</span>
                </div>
                <div className="text-slate-500 my-10">
                  <span>ตัวเลือก</span>&nbsp;&nbsp;
                  <span className="p-1 border-2 ml-20">NaN</span>
                </div>
                <div className="text-slate-500 my-10 flex items-center ">
                  <span className=" mr-24">จำนวน</span>
                  <div className="flex border items-center">
                    <button className=" w-8 h-8 text-3xl ">-</button>
                    <div className="h-8 w-[50px] text-black text-center text-xl pt-1 border-x">
                      1
                    </div>
                    <button className="w-8 h-8 text-3xl">+</button>
                  </div>

                  <span className="ml-4">
                    มีสินค้าทั้งหมด {productById.stock} ชิ้น
                  </span>
                </div>
                <div>
                  <button className="w-44 h-12 bg-orange-100 border border-[#ee4d2d] max-md:w-full">
                    <p className="text-[#ee4d2d]">เพิ่มสินค้าไปยังรถเข็น</p>
                  </button>
                  <button className="w-44 h-12 bg-[#ee4d2d] border border-[#ee4d2d] ml-5 max-md:mt-5 max-md:ml-0 max-md:w-full">
                    <p className="text-white">ซื้อสินค้า</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-slate-100 pb-5">
            <div className="bg-white max-w-screen-xl mx-auto p-5 ">
              <div className="w-full ">
                <p className="text-xl bg-slate-100 px-3 py-4">
                  รายละเอียดสินค้า
                </p>
                <p className="mt-5">{productById.description}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ProductId;
