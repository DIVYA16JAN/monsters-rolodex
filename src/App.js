//import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [searchString, setSearchtring] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstersList, setFilteredMonstersList] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonstersList(filteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    setSearchtring(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search Monsters..."
        type="search"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonstersList} />
    </div>
  );
};

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
    });
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLowerCase() };
    });
  };

  render() {
    const filteredMonstersList = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });
    const { onSearchChange } = this;
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          placeholder="Search Monsters..."
          type="search"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonstersList} />
      </div>
    );
  }
} */

export default App;
