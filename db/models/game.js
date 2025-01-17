'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
 
    static associate({User}) {
      this.belongsTo(User , {foreignKey: 'user_id'})
    }
  }
  Game.init({
    points: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};