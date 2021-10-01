'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('hero', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
       },
       image: {
         type: Sequelize.STRING,
         allowNull: false
       },
       title: {
         type: Sequelize.STRING,
         allowNull: false
       },
       description: {
         type: Sequelize.STRING,
         allowNull: false
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false
       },
       updated_at: {
         type: Sequelize.DATE
       }
     });

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('hero');

  }
};
