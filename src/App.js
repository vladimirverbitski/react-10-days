import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const movie = {
  id: 2278,
  title: "Disaster Movie ",
  date_of_release: "2008-01-01",
  rating: 1.9,
  tags: ["comedy"],
  director: "8418: Jason Friedberg"
};

function MovieItem(props) {
  return (
    <div>
      <p>{props.data.title}</p>
      <p>{props.data.rating}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
