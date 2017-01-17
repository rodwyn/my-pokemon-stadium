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

      this.monsterAttacks();
    },
    specialAttack: function() {
      this.monsterHealth -= this.calculateDamage(10, 15);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }
      this.monsterAttacks();
    },
    giveUp: function() {},
    monsterAttacks: function() {
      this.playerHealth -= this.calculateDamage(5, 10);
      this.checkWin();
    },
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
