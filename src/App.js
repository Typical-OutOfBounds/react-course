import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], // initiliaze as empty for empty case
    };
  }

  // lifecycle method
  // Mounting is the first time a component gets placed on the doc
  // might remount if it has been unmounted. Basically new instance of it
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) // if response
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
      }
      )) // what was returned from response.json is passed to this line
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return(
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
  
}

export default App;
