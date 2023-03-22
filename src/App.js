import { useState } from "react";
import Header from "./components/Header";
import "./style/App.css";
import AnimalShow from "./components/AnimalShow";

const getRandomAnimals = () => {
  const animals = ["bird", "cow", "dog", "cat", "horse", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
    console.log(animals);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow key={index} type={animal} index={index} />
  ));

  return (
    <div className="App">
      <Header title="React Test 3 - Animals" />
      <button onClick={handleClick}>Add Animals</button>
      <div className="animalsContainer">{renderedAnimals}</div>
      <p>TOTAL: {animals.length} </p>
    </div>
  );
}

export default App;
