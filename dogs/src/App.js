import React from 'react';
import './App.css';

import DogList from './components/DogList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
  }

  componentDidMount () {
    this.getDogs('https://dog.ceo/api/breed/hound/images')
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          doggos: data.message.splice(0, 10)
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <DogList dogImgURLs={this.state.doggos}/>
      </div>
    )
  }
}

export default App;
