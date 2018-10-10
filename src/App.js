import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gif: ""
    }
  }

  gifApi(){
    let url = "https://api.giphy.com/v1/gifs/search?api_key=Gs5LTAuwlKWcKL8jl599o8T1Q1X9V1x7&q=giphy&limit=25&offset=0&rating=G&lang=en"
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        this.setState(prevState => ({
          gif: data.data
        }))
      })
  }

handleSubmit(){

}

handleChange(){

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
