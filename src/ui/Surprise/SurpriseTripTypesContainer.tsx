import styles from "./SurpriseTripTypesContainer.module.scss";
import plane from "../../assets/img/undraw/plane.svg";
import roadTrip from "../../assets/img/undraw/roadTrip.svg";
import weekend from "../../assets/img/undraw/weekend.svg";
import day from "../../assets/img/undraw/day.svg";

function SurpriseTripTypesContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header-text"]}>
          <h2 className={styles.title}>Itching to go somewhere different?</h2>
          <p className={styles["title-text"]}>
            Sometimes changing your scenery is just what you need
          </p>
          <p className={styles["title-text"]}>
            Check out the different types of trips we plan
          </p>
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <div className={styles["picture-container"]}>
          <img src={plane} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles.title}>Plane trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
      </div>
      <div className={styles["trip-container-2"]}>
        <div className={styles["text-container-2"]}>
          <h2 className={styles.title}>Road trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
        <div className={styles["picture-container-2"]}>
          <img src={roadTrip} className={styles.picture} />
        </div>
      </div>
      <div className={styles["trip-container"]}>
        <div className={styles["picture-container"]}>
          <img src={weekend} className={styles.picture} />
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles.title}>Weekend Getaways</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
      </div>
      <div className={styles["trip-container-2"]}>
        <div className={styles["text-container-2"]}>
          <h2 className={styles.title}>Day trips</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
            iste. Mollitia fugit officia, esse delectus voluptate libero
            eveniet.
          </p>
        </div>
        <div className={styles["picture-container-2"]}>
          <img src={day} className={styles.picture} />
        </div>
      </div>
    </div>
  );
}

export default SurpriseTripTypesContainer;
