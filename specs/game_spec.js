const assert = require("assert");
const Game = require("../game.js");
const Player = require("../player.js");
const Card = require("../card.js");

describe("game", function(){

  let game;
  let player;
  let card;

  beforeEach(function(){
    game = new Game();
    player1 = new Player("Fat Bob");
    player2 = new Player("Lazy Lisa");
    superman = new Card("Superman", 6, 9, 7);
    batman = new Card("Batman", 5, 3, 9);
  });

    it("has two players", function(){
      game.addPlayer(player1);
      game.addPlayer(player2);
      const result = game.players.length;
      assert.strictEqual(result, 2);
    });

    it("has two cards", function(){
      game.addCard(superman);
      game.addCard(batman);
      const result = game.deck.length;
      assert.strictEqual(result,2);
    });

    it("can deal cards", function(){
      game.addCard(superman);
      game.addCard(batman);
      game.deal(player1);
      game.deal(player2);
      const result = game.deck.length;
      assert.strictEqual(result,0);
      const result1 = player1.cardCount();
      assert.strictEqual(result1, 1);
    });

    it("can compare cards", function(){
      game.addPlayer(player1);
      game.addPlayer(player2);
      game.addCard(superman);
      game.addCard(batman);
      game.deal(player1);
      game.deal(player2);
      const result = game.playRound(player1, player2);
      assert.strictEqual(result, "Player 1 wins");
    });

});
