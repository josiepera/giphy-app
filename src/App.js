import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gif from './components/Gif'


class App extends Component {

constructor(props){
    super(props)
    this.state = {
      url: "",
      title:"",
      isLoading: true
    }
     this.handleClick = this.handleClick.bind(this)
  }

handleClick(){
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=Gs5LTAuwlKWcKL8jl599o8T1Q1X9V1x7&tag=&rating=G'
  fetch(url)
    .then( res => res.json() )
    .then( data => {
    this.setState(prevState => ({
      url: data.data.embed_url,
      title: data.data.title,
      isLoading: false
      }))
    })

}

componentDidMount(){
  setTimeout(() => {
    this.setState(prevState => ({
      isLoading: false
    }))
  }, 3000)
  }

  render() {
    if(this.state.isLoading) {
      return(
        <h3> Loading, wait! wait! wait!</h3>
        )
    }
    return (
      <div className="Gif-App">
        <h1> Giphy Generator </h1>
        <button onClick = { () => this.handleClick()}>Random GIF</button>
        <Gif url={this.state.url} title={this.state.title}/>
        <h3 title={this.state.title}>{this.state.title}</h3>
        <iframe src={this.state.url}/>
      </div>
    );
  }
}


export default App;
