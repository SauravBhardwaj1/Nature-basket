import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

function Carousel(){


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://picsum.photos/200/300/?image=523",
        "https://picsum.photos/200/300/?image=524"
      ],
      selectedImage: "https://picsum.photos/200/300/?image=523"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1]
          };
        } else {
          return {
            selectedImage: this.state.images[0]
          };
        }
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.selectedImage} />
      </div>
    );
  }
}
}

export default Carousel;

