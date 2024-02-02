import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/NavBar";
import useProduct from "../hook/useProduct";
import { useNavigate } from "react-router-dom";
import { useAddProduct } from "../context/productContest";
import LoadingPage from "./LoadingPage";
import NotFoundPage from "./NotFoundPage";

function Category() {
  const { getCategory, product, loading, isError } = useProduct();
  const param = useParams();
  const navigate = useNavigate();
  const { navgateProduct } = useAddProduct();

  useEffect(() => {
    getCategory(param.keyword);
  }, [navgateProduct]);
  return (
    <>
      <NavBar />
      <div className=" bg-slate-100 py-5 border-t-2">
        <div className="max-w-screen-xl mx-auto">
          <section className="my-10">
            <div className="">
              {loading ? (
                <LoadingPage />
              ) : isError ? (
                <NotFoundPage />
              ) : (
                <div className="mt-2 grid grid-cols-6 gap-5 max-lg:gap-2 max-lg:grid-cols-4 max-lg:px-2 max-sm:grid-cols-3 max-sm:gap-6">
                  {product.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="  border border-gray-200 bg-white relative hover:border hover:border-[#ee4d2d] hover:-translate-y-1 w-[195px] hover:cursor-pointer"
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
                              ขายแล้ว 0 ชิ้น
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
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Category;
