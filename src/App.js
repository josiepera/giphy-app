import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gif from './components/Gif'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",

      //original_url
    }
  }

handleClick(){
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=Gs5LTAuwlKWcKL8jl599o8T1Q1X9V1x7&tag=&rating=G'
  fetch(url)
    .then( res => res.json() )
    .then( data => {
    this.setState(prevState => ({
      url: data.data.image_original_url,

      }))
    })

}


  render() {
    console.log(this.state)
    return (
      <div className="Gif-App">
        <h1> Giphy Generator </h1>
        <button onClick = { () => this.handleClick()}>Random GIF</button>
        <Gif url={this.state.url}/>
      </div>
    );
  }
}


export default App;
