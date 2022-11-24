import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], // initiliaze as empty for empty case
      searchField: ''
    };
    console.log('constructor');
  }

  // lifecycle method
  // Mounting is the first time a component gets placed on the doc
  // might remount if it has been unmounted. Basically new instance of it
  componentDidMount() {
    console.log('componentdidmount');
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
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          console.log(event.target.value);
          const searchField = event.target.value.toLowerCase();
          // if you want to modify an array, you want to generate a new one with the modification

          this.setState(() => {
            return { searchField }; // Key and value are 'searchField'
          });
        }}/>
        {
          filteredMonsters.map((monster) => {
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
