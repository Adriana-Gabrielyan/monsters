import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          price: 650,
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          price: 145,
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          price: 100,
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          price: 150,
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          price: 360,
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          price: 190,
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          price: 250,
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          price: 440,
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          price: 680,
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          price: 30,
        },
      ],
      searchField: "",
      selectedMonsters: [],
    };
  }

  // componentDidMount = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // };

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

    const totalPrice = this.state.selectedMonsters.reduce(
      (total, monster) => total + monster.price,
      0
    );

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
                ? this.state.selectedMonsters.length + ", Total " + totalPrice
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
