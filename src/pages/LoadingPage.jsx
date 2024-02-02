import ReactLoading from "react-loading";

function LoadingPage() {
  return (
    <div className="w-full h-full flex justify-center items-center m-20">
      <ReactLoading type="spin" color="#ee4d2d" height={"10%"} width={"10%"} />
    </div>
  );
}

export default LoadingPage;
