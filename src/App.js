import { Component } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
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

  // Moving function here so it doesn't keep getting created each time
  // We never change the function, so we only need to make it once
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    // if you want to modify an array, you want to generate a new one with the modification

    this.setState(() => {
      return { searchField }; // Key and value are 'searchField'
    });
  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this // only one function being returned

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;
