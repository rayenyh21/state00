import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'John Doe',
        bio: 'Software Developer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Engineer'
      },
      shows: false,
      timeInterval: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt={Person.fullName} />
            <p>Profession: {Person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}


export default App;
