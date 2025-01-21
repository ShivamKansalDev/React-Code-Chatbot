import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <button className="bg-slate-950 py-24" onClick={() => navigate("/main")}>
        HomePage
      </button> */}
      <div className="flex justify-center items-center h-screen bg-blue-500">
        <h1 className="text-4xl text-white font-bold">Hello, Tailwind CSS!</h1>
      </div>
    </>
  );
};
export default HomePage;
