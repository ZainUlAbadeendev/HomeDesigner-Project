import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const ShopHero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://i.ibb.co/dJNHbxk/photo-1616047006789-b7af5afb8c20.jpg)",
        backgroundSize: "cover", // Change this line to "cover" for full width
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] text-center mx-auto animate-fadeIn`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
        >
          Collection for Interior Design
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffff] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
          exercitationem labore vel, dolore quidem asperiores, consequatur{" "}
          <br />
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Explore Now
            </span>
          </div>
        </Link>
      </div>
    </div>



  );
};

export default ShopHero;
