import styles from "./navbar.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [toggleSide, setSidebar] = useState(false);
  const OpenSideBar = (e) => {
    e.preventDefault();

    setSidebar(!toggleSide);
  };
  const CloseSideBar = () => {
    setSidebar(!toggleSide);
  };
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.nav_image}>
          <a href="https://www.tesla.com/">
            <img src="/images/tesla_icon2.png" alt="icon here" />
          </a>
        </div>
        <div className={`${styles.sidebar} ${toggleSide ? styles.active : ""}`}>
          <a href="" className={styles.closetag} onClick={OpenSideBar}>
            <IoMdClose />
          </a>
          <a href="">Vehicles</a>
          <a href="">Energy</a>
          <a href="">Charging</a>
          <a href="">Discover</a>
          <a href="">Shop</a>
          <a href="">
            {" "}
            <CiGlobe /> United States
          </a>
          <a href="">
            <PiUserCircleThin /> Account
          </a>
        </div>
        <div className={styles.ls}>
          <a href="">Vehicles</a>
          <a href="">Energy</a>
          <a href="">Charging</a>
          <a href="">Discover</a>
          <a href="">Shop</a>
        </div>
        <div className={styles.ls2}>
          <a href="">
            <BsQuestionCircle />
          </a>
          <a href="">
            <CiGlobe />
          </a>
          <a href="">
            <PiUserCircleThin />
          </a>
        </div>
        <button className={styles.toggleTag} onClick={OpenSideBar}>
          Menu
        </button>
      </div>
    </>
  );
};
export default Navbar;
