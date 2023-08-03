import styles from "./ExpandingCards.module.scss";
import kyoto from "../../public/img/kyoto.jpg";
import fuji from "../../public/img/fuji.jpg";
import tokyo from "../../public/img/tokyo.jpg";
import { useState } from "react";
import ExpandingCardItem from "./ExpandingCardItem";

const tours = [
  { img: kyoto, text: "Explore Kyoto" },
  { img: tokyo, text: "Explore Tokyo" },
  { img: fuji, text: "Explore Fuji" },
];

function ExpandingCards() {
  const [curActive, setCurActive] = useState(0);

  return (
    <div className={styles.container}>
      {tours.map((el, i) => (
        <ExpandingCardItem
          img={el.img}
          text={el.text}
          key={el.text}
          num={i}
          curActive={curActive}
          onActive={setCurActive}
        ></ExpandingCardItem>
      ))}
    </div>
  );
}

export default ExpandingCards;