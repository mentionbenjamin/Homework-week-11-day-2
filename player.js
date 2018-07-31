const Player = function (name){
  this.name = name;
  this.cards = [];
};


Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.cardCount = function () {
  return this.cards.length;
};

module.exports = Player;
