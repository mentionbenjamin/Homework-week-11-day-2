const Game = function (){
  this.players = [];
  this.deck = [];
};

Game.prototype.playerCount = function () {
  return game.players.length;
};

Game.prototype.cardCount = function () {
  return game.cards.length;
};

Game.prototype.addPlayer = function (player) {
  this.players.push(player);
};

Game.prototype.addCard = function (card) {
  this.deck.push(card);
};

Game.prototype.deal = function (player) {
  const card = this.deck.shift();
  player.addCard(card)
};

Game.prototype.playRound = function (player1, player2) {
  let attribute = "strength";
  if(player1.getCardAttributeValue(attribute) > player2.getCardAttributeValue(attribute)){
    return "Player 1 wins";
    } else {
    return "Player 2 wins";
    }
};

module.exports = Game;
