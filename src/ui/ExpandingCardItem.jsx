import styles from "./ExpandingCardItem.module.scss";

function ExpandingCardItem({ curActive, onActive, img, text, num, desc }) {
  const isOpen = num === curActive;

  function handleToggle() {
    onActive(num);
  }

  const active = `${isOpen ? styles.active : ""}`;
  const textActive = `${isOpen ? styles.textActive : ""}`;

  return (
    <div
      className={`${styles.panel} ${active}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
      onClick={handleToggle}
    >
      <div className={`${textActive} ${styles.box}`}>
        <p className={styles.header}> {text}</p>
        <p className={styles.description}>{desc}</p>
        <a className={styles.link}>&rarr; Read more</a>
      </div>
    </div>
  );
}

export default ExpandingCardItem;
