import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProduct } from "../context/productContest";
import useProduct from "../hook/useProduct";

function NavBar() {
  const { searchProducts, setSearchProducts, navgateProduct } = useAddProduct();
  const { getProduct } = useProduct();
  const navigate = useNavigate();
  const limit = 50;

  useEffect(() => {
    getProduct(searchProducts, limit);
  }, []);
  return (
    <nav className="bg-[#ee4d2d] sticky top-0 z-10">
      <div className="max-w-screen-xl text-white flex flex-col mx-auto max-lg:px-3 max-lg:max-w-[1024px] ">
        <div className="w-full h-8 p-1 flex   max-md:hidden">
          <div className="w-full flex text-xs justify-items-center mt-1 ">
            <span className="flex">
              <p>Seller Centre </p>

              <p className="mx-5">|</p>
            </span>
            <span className="flex">
              <p>เริ่มต้นขายสินค้า</p>

              <p className="mx-5 max-md:mx-0">|</p>
            </span>
            <span className="flex">
              {" "}
              <p>ดาวน์โหลด</p>
              <p className="mx-5 max-md:mx-0">|</p>
            </span>
            <span className="flex ">
              ติดตามเราบน
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className="w-full flex justify-end text-xs items-center mt-1 ">
            <span className="flex items-center  ">
              <img src="../../icon/navIcon/bell.svg" alt="" />
              <p className="px-1 max-md:mx-0">การแจ้งเตือน</p>
            </span>
            <span className="flex items-center ">
              <img src="../../icon/navIcon/question-mark-circle.svg" alt="" />
              <p className="px-1 max-md:mx-0">ช่วยเหลือ</p>
            </span>
            <span className="flex items-center ">
              <img src="../../icon/navIcon/globe-alt.svg" alt="" />
              <p className="px-1 max-md:mx-0">ไทย</p>
              <img src="../../icon/navIcon/chevron-down.svg" alt="" />
            </span>
            <span className="flex ml-2 max-md:mx-0">
              <p className="px-1 max-md:mx-0">สมัครใหม่</p>

              <p className="mx-1 max-md:mx-0">|</p>
            </span>
            <span className="flex">
              {" "}
              <p className="px-1">เข้าสู่ระบบ</p>
            </span>
          </div>
        </div>
        <div className="w-full h-20 py-4 flex justify-between max-md:flex-col">
          <div
            className="hover:cursor-pointer max-md:hidden"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="../../Shopee.svg" alt="" width={146} height={46} />
          </div>

          <div className="w-2/3 mx-20 max-md:mx-0 max-md:w-full max-md:flex max-md:items-center">
            <div
              className="md:hidden px-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="../../Shopee_logo.svg" alt="" width={40} height={40} />
            </div>
            <div className="w-full relative">
              <input
                type="text"
                id="search"
                className="w-full h-10 rounded-sm text-black"
                value={searchProducts}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navgateProduct(searchProducts);
                  }
                }}
                onChange={(e) => {
                  setSearchProducts(e.target.value);
                }}
              />
              <button
                className="w-14 h-8 bg-[#ee4d2d] absolute top-1 right-1 rounded-sm flex justify-center items-center"
                onClick={() => {
                  navgateProduct(searchProducts);
                }}
              >
                <img src="../../icon/navIcon/search.svg" alt="" />
              </button>
            </div>
            <div className="md:hidden px-2">
              <img
                src="../../icon/navIcon/shopping-cart.svg"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="w-full flex justify-between text-sm hover:cursor-pointer max-md:hidden">
              <p>Lorem, </p>
              <p>Lorem, </p>
              <p>Lorem, </p>
              <p>Lorem, </p>
              <p>Lorem, </p>
              <p>Lorem, </p>
              <p>Lorem, </p>
            </div>
          </div>
          <div className="flex justify-center mr-5 max-md:hidden hover:cursor-pointer">
            <img
              src="../../icon/navIcon/shopping-cart.svg"
              alt=""
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
