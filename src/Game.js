// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard')

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.enemy = new Enemy();
    this.trackLength = trackLength;
    this.hero = new Hero({position:1}); // Герою можно аргументом передать бумеранг.
    this.boomerang = new Boomerang(this.enemy, this.hero)
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    runInteractiveConsole(this.hero)
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin
    this.track[this.boomerang.position] = this.boomerang.skin
  }

  check() {
    
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }else if(this.boomerang.position === this.enemy.position){
      this.enemy.die();
      // this.hero.getPoints()
      this.boomerang.state = 'backToHero'
    
    }else if(this.boomerang.position === this.hero.position){
      this.boomerang.state = 'goToEnemy'
      this.boomerang.skin = null

    }
  }

  async play() {
      View.getName()

    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);

    },500);
  }
}

module.exports = Game;
