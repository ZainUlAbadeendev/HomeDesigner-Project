import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://i.ibb.co/544HV8J/Article.png)",
        backgroundSize: "cover", // Change this line to "cover" for full width
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] text-left ml-16`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
        >
          Collection for <br />Interior Design
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffff] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
          exercitationem labore vel, dolore quidem asperiores, consequatur{" "}
          <br />
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>


  );
};

export default Hero;
