import React, { Component } from 'react';
import './App.css';
import Coursesales from "./Component/Coursesales/Coursesales"
class App extends Component {
  render() {
    const courses = [
      { name: "Complete React JS web developer with ES6", price: 100 },
      { name: "Complete React Developer in 2020", price: 200 },
      { name: "The Professional Bass Masterclass", price: 300 },
      { name: "Webpack 4 in 2020", price: 400 },
      { name: "Build Responsive Real World Websites", price: 500 },
    ]
    return (
      <div className="App">
        <header><h1>Welcome to Course Purchase Shore</h1></header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
