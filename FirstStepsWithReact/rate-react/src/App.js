import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      features: [
        {
          id:0,
          title:'JSX',
          rating:2
        },
        {
          id:1,
          title:'React DOM',
          rating:4
        },
        {
          id:2,
          title:'Stateless Functional Components',
          rating:1
        },
        {
          id:3,
          title:'Class Components',
          rating:5
        },
        {
          id:4,
          title:'props',
          rating:3
        },
      ]
    }

    this.rateFeature = this.rateFeature.bind(this)
  }

  rateFeature(id, rating ){
    const { features } = this.state

    let newFeatures = features.map(f=>{
      if (f.id != id){
        return f
      } else {
        return ({
          ...f,
          rating
        })
      }
    })


    this.setState({
      features: newFeatures
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Titan Software</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className = "features">
          {this.state.features.map(f =>
              <div key={f.id}>
                <h3>{f.title}</h3>
                <StarRating starsSelected={f.rating}
                            onChange = {rating =>this.rateFeature(f.id,rating)}/>
              </div>
            )}
        </div>

      </div>
    );
  }
}

export default App;
