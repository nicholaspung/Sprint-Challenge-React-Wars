import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.next)
        this.setState(prevState => {
          return { 
            starwarsChars: prevState.starwarsChars.concat(data.results)
          }
        },
        () => {
          if (data.next) {
            this.getCharacters(data.next)
          }
        }
        );
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsCharsList={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
