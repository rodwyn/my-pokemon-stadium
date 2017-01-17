new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunnig: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunnig = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      this.monsterHealth -= this.calculateDamage(3, 9);

      if (this.checkWin()) {
        return;
      }

      this.playerHealth -= this.calculateDamage(2, 10);
      this.checkWin();
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function() {
      if (this.monsterHealth <=0) {
        if (confirm('You Won! New Game?')) {
          this.startGame();
        }
        else {
          this.gameIsRunnig = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You Lost! New Game?')) {
          this.startGame();
        }
        else {
          this.gameIsRunnig = false;
        }
        return true;
      }
      return false;
    }
  }
});
