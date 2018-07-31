const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");

describe("player", function(){

  let player;

  beforeEach(function(){
    player = new Player("Fat Bob");
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Batman", 5, 3, 9);
  });

  it("has a name", function(){
    const result = player.name;
    assert.strictEqual(result, "Fat Bob");
  });

  describe("cards", function(){
    it("has no cards", function(){
      const result = player.cards;
      assert.deepStrictEqual(result, []);
    });
    it("has cards count", function(){
      const result = player.cardCount();
      assert.strictEqual(result, 0);
    });
    it("can add cards", function(){
      player.addCard(card1);
      const result = player.cardCount();
      assert.strictEqual(result, 1);
    });
    it("can remove cards", function(){
      player.addCard(card1);
      player.removeCard(card1);
      const result = player.cardCount();
      assert.strictEqual(result, 0);
    });
  });
});
