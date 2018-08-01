const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");

describe("player", function(){

  let player;

  beforeEach(function(){
    player1 = new Player("Fat Bob");
    player2 = new Player("Thin Joe");
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Batman", 5, 3, 9);
  });

  it("has a name", function(){
    const result = player1.name;
    assert.strictEqual(result, "Fat Bob");
  });

  describe("cards", function(){
    it("has no cards", function(){
      const result = player1.cards;
      assert.deepStrictEqual(result, []);
    });
    it("has cards count", function(){
      const result = player1.cardCount();
      assert.strictEqual(result, 0);
    });
    it("can add cards", function(){
      player1.addCard(card1);
      const result = player1.cardCount();
      assert.strictEqual(result, 1);
    });
    it("can remove cards", function(){
      player1.addCard(card1);
      player1.removeCard(card1);
      const result = player1.cardCount();
      assert.strictEqual(result, 0);
    });
    it("can remove all cards", function(){
      player1.addCard(card1);
      player1.addCard(card2);
      player1.removeAllCards();
      const result = player1.cardCount();
      assert.strictEqual(result, 0);
    });
  });
});
