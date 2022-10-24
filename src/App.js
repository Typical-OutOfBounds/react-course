import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '423432h'
        },
        {
          name: 'Frank',
          id: '42632ht'
        },
        {
          name: 'Jacky',
          id: '4234111'
        },
        {
          name: 'Andrei',
          id: '4230982h'
        }
      ]
      
    }
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
