// Наш герой.

class Hero {
  constructor({ position, boomerang }) {
    this.skin = 'H'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
