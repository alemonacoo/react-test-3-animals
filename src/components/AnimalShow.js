import React, { useState } from "react";
import "../style/AnimalShow.css";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import heart from "../svg/heart.svg";
import horse from "../svg/horse.svg";

const svgMap = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ type, index }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (clicks == 6) {
      setClicks(0);
    } else {
      setClicks(clicks + 1);
    }
  };
  return (
    <div className="animalCard" onClick={handleClick}>
      <img src={svgMap[type]} alt="nopic" />
      <img
        id="heart-img"
        src={heart}
        style={{ height: 10 + 10 * clicks }}
        alt=""
      />
    </div>
  );
};

export default AnimalShow;
