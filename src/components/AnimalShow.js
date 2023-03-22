import React from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import heart from "../svg/heart.svg";
import horse from "../svg/horse.svg";

const svgMap = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ type }) => {
  return (
    <div className="animalCard">
      <img src={svgMap[type]} alt="nopic" />
    </div>
  );
};

export default AnimalShow;