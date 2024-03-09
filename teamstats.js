const team = {
    _players: [],
    _games: [],
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
  
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
  
      this._games.push(game);
    },
  
    players() {
      return this._players;
    },
  
    games() {
      return this._games;
    },
  };
  
  team.addPlayer('pacifique', 'Nyirishem', 25);
  team.addPlayer('florence', 'Uwineza', 30);
  
  
  console.log(team.players());
  
  team.addGame('Titans', 150, 120);
  
  console.log(team.games());
