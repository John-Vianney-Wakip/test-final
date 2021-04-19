const {Model, DataTypes, Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./temp.db"     
})

class User extends Model {}
User.init({
    role: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}, {sequelize})


class Message extends Model{}
Message.init({
    content: DataTypes.STRING,
    time: DataTypes.TIME,
}, {sequelize})

User.hasMany(Message);
Message.belongsTo(User);

class Like extends Model{}
Like.init({
    LikesNum: DataTypes.INTEGER,
}, {sequelize})

User.hasMany(Like);
Like.belongsTo(User);

(async()=>{
    sequelize.sync({force:true})
})()

module.exports = {
    User, 
    Message,
    Like,
    sequelize
}

