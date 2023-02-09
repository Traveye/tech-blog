const Sequalize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        timestamp: {
            type: DataTypes.DATE,   
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
);

