import { NavLink } from "react-router-dom";
import "../index.css";

function Landingpage() {
  return (
    <div className="container">
      <img src="/assets/sun-cloud.svg" alt="cloud-logo" className="size-64 mx-auto " />
      <div className="mt-10 mb-14">
        <h1 className="text-center text-white text-6xl font-bold">Cloud9ja</h1>
        <p className="text-center text-2xl font-mono font-bold text-orange-200 mt-4">Heads up. Skies ahead</p>
      </div>
      <NavLink to ='/homepage' className="p-3 text-2xl bg-orange-300 rounded-3xl w-56 font-bold text-purple-800">Get started</NavLink>
    </div>
  );
}
export default Landingpage;
