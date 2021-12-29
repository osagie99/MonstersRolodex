import React, {Component} from 'react';
import CardListComponent from './components/cards/card-list/CardList.component';
import {SearchBox} from './components/searchbox/SearchBox.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchFeild: e.target.value})
  }
  render() {
    const {monsters , searchFeild} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
