import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css"; // import styles.css file

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0 ,
      shows: false,
      person: {
        fullName: "Andrew tate",
        bio: "Andrew Tate known as Emory Andrew Tate III, is a British-American kickboxer, commentator and businessman.",
        imgSrc:
          "https://th.bing.com/th/id/OIP.EWM5eEjTCSDYPFhPENAXMAHaLJ?w=118&h=180&c=7&r=0&o=5&pid=1.7",
        profession: "Top G",
      },
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcelebmagazine.com%2Fwho-is-andrew-tate-here-are-the-top-5-best-or-worst-andrew-tate-moments%2F&psig=AOvVaw2eW-dXfwqqY9yLwVdnELKM&ust=1681194241541000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIi-5d7Wnv4CFQAAAAAdAAAAABAE,"
        }}
      >
        <div className="App">
          <h1 style={{ textAlign: "center" }}>State WS</h1>
          <div className="aa">
            <Button
              variant="success"
              onClick={() => {
                this.setState({ counter: this.state.counter + 1 });
              }}
            >
              +
            </Button>

            {this.state.counter}
            <Button
              variant="warning"
              onClick={() => {
                this.setState({ counter: this.state.counter - 1 });
              }}
            >
              -
            </Button>

            <Button variant="primary" onClick={this.toggleProfile}>
              {this.state.shows ? "Hide Profile" : "Show Profile"}
            </Button>
          </div>

          {this.state.shows && (
            <div className="profile-container">
              <img
                className="profile-image"
                src={this.state.person.imgSrc}
                alt={this.state.person.fullName}
              />
              <h2 className="profile-name">{this.state.person.fullName}</h2>
              <p className="profile-bio">{this.state.person.bio}</p>
              <p className="profile-profession">
                {this.state.person.profession}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
