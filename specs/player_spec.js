const assert = require("assert");
const Player = require("../player.js");

describe("player", function(){

  let player;

  beforeEach(function(){
    player = new Player("Fat Bob");
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

  });
});
