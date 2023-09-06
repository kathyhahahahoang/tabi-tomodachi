import styles from "./Banner2.module.scss";

function Banner2({ h1, text1, text2, svg, bgColor }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>{h1}</h1>
        <p className={styles.text}>{text1}</p>
        <p className={styles.text}>{text2}</p>
      </div>
      <div className={styles["image-container"]}>
        <img src={svg} className={styles.picture} />
      </div>
    </div>
  );
}

export default Banner2;