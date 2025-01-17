// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
// const Hero = require('./game-models/Hero');
// const  = require('./Enemy');

class Boomerang {
  constructor(enemy, hero) {
    this.skin = '🌀';
    this.enemy = enemy
    this.hero = hero
    this.position = hero.position+1;
    this.state = 'goToEnemy'
  }

  fly() {
  // if (this.position !== this.enemy.position){
  if(this.state === 'goToEnemy') {
    this.moveRight()
  }else if (this.state === 'backToHero') {
    this.moveLeft();
  }
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
