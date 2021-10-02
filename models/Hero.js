module.exports = (sequelize, Datatypes) => {
    const Hero = sequelize.define('Hero', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: Datatypes.STRING,
            allowNull: false
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: Datatypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: Datatypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'hero',
        timestamps: true
    });

    return Hero;
}