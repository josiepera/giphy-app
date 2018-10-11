import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gif from './components/Gif'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: "",
      height: "",
      width:""
      //embed_url
    }
  }

handleClick(){
  let url = 'https://api.giphy.com/v1/gifs/search?api_key=Gs5LTAuwlKWcKL8jl599o8T1Q1X9V1x7&q=giphy&limit=25&offset=0&rating=G&lang=en'
  fetch(url)
    .then( res => res.json() )
    .then( data => {
    this.setState(prevState => ({
      url: data.data[0].images.original.url,
      height: data.data[0].images.original.height,
      width: data.data[0].images.original.width
      }))
    })

}


  render() {
    console.log(this.state)
    return (
      <div className="Gif-App">
        <h1> Giphy Generator </h1>
        <button onClick = { () => this.handleClick()}>Random GIF</button>
        <Gif/>
      </div>
    );
  }
}


export default App;
