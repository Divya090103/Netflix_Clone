import react from "react";
import Background from "../Component/Background";
import Navbar from "../Component2/Navbar";
import Crs from "../Component2/Carousel";
const Home2 = () => {
  return (
    <>
      {localStorage.getItem("authorize") && localStorage.getItem("user") ? (
        <>
          <Navbar />
          <Crs />
        </>
      ) : (
        "not logged in"
      )}
    </>
  );
};
export default Home2;
