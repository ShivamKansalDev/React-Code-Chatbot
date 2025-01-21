import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <button className="bg-slate-950 py-24" onClick={() => navigate("/main")}>
        HomePage
      </button> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};
export default HomePage;
