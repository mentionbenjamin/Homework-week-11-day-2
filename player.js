const Player = function (name){
  this.name = name;
  this.cards = [];
};

Player.prototype.cardCount = function () {
  return this.cards.length;
};

Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.removeCard = function (card) {
  const indexOfCard = this.cards.indexOf(card);
  this.cards.splice(indexOfCard, 1);
};

Player.prototype.removeAllCards = function () {
  while(this.cards.length > 0) {
    this.cards.pop();
  }
};

Player.prototype.getCardAttributeValue = function (attribute) {
  const cardToBePlayed = this.cards.pop();
  return cardToBePlayed[attribute];
};

// player1.getCardAttributeValue('strength')


  module.exports = Player;
