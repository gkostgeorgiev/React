import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ghouls: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return { ghouls: users };
      },
        // console.log(this.state)
      ))
      .catch(err => console.log(err));
    console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const { ghouls, searchField } = this.state;
    const { onSearchChange } = this;
    
    const result = ghouls.filter((ghoul) => {
      return ghoul.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search ghouls'
          onChange={onSearchChange} />
        {
          result.map((ghoul) => {
            return <div key={ghoul.id}><h1>{ghoul.name}</h1></div>;
          })
        }
      </div>
    );
  }
}

export default App;
