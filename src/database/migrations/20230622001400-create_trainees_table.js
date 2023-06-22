//Atividade-4 do Trello
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('trainees', {
        id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        name:{
          allowNull: false,
          type: Sequelize.STRING
        },

        email:{
          allowNull: false,
          type: Sequelize.STRING
        },

        rg:{
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },

        cpf: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },

        primary_phone_contact: {
          allowNull: false,
          type: Sequelize.STRING
        },

        secondary_phone_contact: {
          allowNull: false,
          type: Sequelize.STRING
        },

        date_birth: {
          allowNull: false,
          type: Sequelize.DATE
        },

        father_name: {
          allowNull: false,
          type: Sequelize.STRING
        },

        mother_name: {
          allowNull: false,
          type: Sequelize.STRING
        },

        have_special_needs: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },

        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },

        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
        
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('trainees');
  }
};

// Para executar a migração npx sequelize-cli db:migrate