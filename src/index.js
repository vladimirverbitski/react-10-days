import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const movie = {
  id: 2278,
  title: "Disaster Movie ",
  date_of_release: "2008-01-01",
  rating: 1.9,
  tags: ["comedy"],
  director: "8418: Jason Friedberg",
  image: "https://picsum.photos/200/300"
};

function Image(props) {
  return <img src={props.image} alt={props.title} />;
}

class MovieItem extends React.Component {
  render() {
    const {
      data: { title, rating, image }
    } = this.props;
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
