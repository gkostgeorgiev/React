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
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => this.setState(() => {
        return { ghouls: users };
      },
        console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    const result = this.state.ghouls.filter((ghoul) => {
      return ghoul.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search ghouls'
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }} />
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
