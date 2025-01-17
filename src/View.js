// Сделаем отдельный класс для отображения игры в консоли.
const { input } = require('@inquirer/prompts')
const Model = require('../Model')
class View {
  render(view) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(view.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }

  static async getName(){
    const name  = await input({ message: 'Введи свое имя:' })
    await Model.saveUser({name})
     
  }
  
}

module.exports = View;
