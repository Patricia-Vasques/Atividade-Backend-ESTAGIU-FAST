'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  //incluir
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.createTable('categories',
       { id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
       },

       name:{
        type: Sequelize.STRING,
        allowNull: false
       },
      
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      });
     
  },

//excluir
async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('categories');
}
};
