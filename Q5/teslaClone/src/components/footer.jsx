import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.foot}>
        <a href="">Tesla{"\u00a9"} 2024</a>
        <a href="">Privacy & Legal</a>
        <a href="">Vehicle Recalls</a>
        <a href="">Contacts</a>
        <a href="">Get Updates</a>
        <a href="">News</a>
        <a href="">Location</a>
      </div>
    </>
  );
};
export default Footer;
