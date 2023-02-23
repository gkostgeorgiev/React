import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ghouls: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => this.setState(() => {
        return { ghouls: users };
      },
        console.log(this.state)))
      .catch(err => console.log(err));
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search ghouls' onChange={(event) => {
          const searchString = event.target.value.toLowerCase();
          const result = this.state.ghouls.filter((ghoul) => {
            return ghoul.name.toLowerCase().includes(searchString);
          });

          this.setState(() => {
            return { ghouls: result };
          });
        }} />
        {
          this.state.ghouls.map((ghoul) => {
            return <div key={ghoul.id}><h1>{ghoul.name}</h1></div>;
          })
        }
      </div>
    );
  }
}

export default App;
