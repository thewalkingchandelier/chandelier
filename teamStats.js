const team = {
    _players: [{ firstName: "Sam", lastName: "Smith", age: 28 },
      {firstName: "Benji", lastName: "Hooper", age: 21},
      {firstName: "Tristan", lastName: "Montgomery", age: 30}]
        ,  _games: [{ opponent: "Wildcats", teamPoints: 7, opponentPoints: 5},
        { opponent: "Panthers", teamPoints: 9, opponentPoints: 12 }, 
        { opponent: "Falcons", teamPoints: 3, opponentPoints: 3}],
        get players() {
          return this._players
          },
          get games() {
            return this._games
          },
          addPlayer(newFirstName, newLastName, newAge) {
            let player = {
              firstName: newFirstName,
              lastName: newLastName,
              age: newAge
            }
            this.players.push(player)
          },
          addGame(newOpponent, newTeamPoints, newOpponentPoints) {
            let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
            }
            this.games.push(game)
          }
  };
  team.addPlayer("Bugs", "Bunny", 76)
  team.addGame("Titans", 100, 98)
  