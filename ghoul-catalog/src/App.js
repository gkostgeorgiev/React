import { Component } from 'react';

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ghouls: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { ghouls: users };
      },
      ))
      .catch(err => { });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render from App.js');
    const { ghouls, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredGhouls = ghouls.filter((ghoul) => {
      return ghoul.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search ghouls' />
        <CardList ghouls={filteredGhouls} />
      </div>
    );
  }
}

export default App;