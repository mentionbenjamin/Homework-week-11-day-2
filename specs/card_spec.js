const assert = require("assert");
const Card = require("../card.js");

describe("Card", function(){
  let card;
  beforeEach(function(){
    card = new Card("Superman", 6, 9, 7);
  });

  it("has a name", function(){
    const result = card.name;
    assert.strictEqual(result, "Superman");
  });
  it("has intelligence value", function(){
    const result = card.intelligence;
    assert.strictEqual(result, 6);
  });
  it("has strength value", function(){
    const result = card.strength;
    assert.strictEqual(result, 9);
  });
  it("has agility value", function(){
    const result = card.agility;
    assert.strictEqual(result, 7);
  });


});
