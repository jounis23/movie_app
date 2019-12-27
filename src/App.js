import React from "react";
import PropTypes from "prop-types";

const foodList = [
  {
    id: 1,
    name: "kimchi",
    rating: 3.9
  },
  {
    id: 2,
    name: "bibimbap",
    rating: 4.0
  }
];
foodList.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function Food({ name, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating} / 5.0</h4>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodList.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
