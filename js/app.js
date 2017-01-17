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
    }
  }
});
