import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Card } from "./components/card/card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      selectedMonsters: [],
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  };

  handleClickAdd = (id, type) => {
    const monsters = [...this.state.monsters];
    const selectedMonsters = [...this.state.selectedMonsters];

    const selectedMonster = this.state.monsters.find((item) => {
      return item.id === id;
    });

    selectedMonsters.push(selectedMonster);

    const monsterIndex = this.state.monsters.findIndex(
      (item) => item.id === id
    );
    monsters.splice(monsterIndex, 1);

    this.setState({ selectedMonsters, monsters });
  };
  handleClickRemove = (id) => {
    const monsters = [...this.state.monsters];
    const selectedMonsters = [...this.state.selectedMonsters];
    const selectedMonster = this.state.selectedMonsters.find((item) => {
      return item.id === id;
    });

    monsters.push(selectedMonster);

    const monsterIndex = selectedMonsters.findIndex((item) => item.id === id);
    selectedMonsters.splice(monsterIndex, 1);

    this.setState({ selectedMonsters, monsters });
  };
  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <div className="main">
          <div className="w-50">
            <h1>All Monsters</h1>
            <CardList
              type="avaible"
              handleClick={this.handleClickAdd}
              monsters={monsters}
            />
          </div>

          <div className="w-50">
            <h1>
              Selected Monsters{" "}
              {this.state.selectedMonsters.length > 0
                ? this.state.selectedMonsters.length
                : ""}
            </h1>
            {this.state.selectedMonsters.length > 0 ? (
              <CardList
                type="favorites"
                handleClick={this.handleClickRemove}
                monsters={this.state.selectedMonsters}
              />
            ) : (
              "You haven't selected any monster"
            )}
            <div className="card-list"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
