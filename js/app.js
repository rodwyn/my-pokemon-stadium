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
      var max = 9;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;

      if (this.monsterHealth <=0) {
        alert('You Won!');
        this.gameIsRunnig = false;
        return;
      }

      max = 10;
      min = 2;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      if (this.playerHealth <=0) {
        alert('You Lost!');
        this.gameIsRunnig = false;
        return;
      }
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {}
  }
});
