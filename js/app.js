new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunnig: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunnig = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var damage = this.calculateDamage(3, 9);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage;
      });
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
    giveUp: function() {
      this.gameIsRunnig = false;
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 10);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage;
      });
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
