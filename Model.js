const {User} = require('./db/models')
const {Game} = require('./db/models')

class Model { 
    static async saveUser(name){
        return User.create(name)
    }

    static async createGame ({user_id, points}) {
       return  Game.create({user_id, points})
    }
}

module.exports = Model