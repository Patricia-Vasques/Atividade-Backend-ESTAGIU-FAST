'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('companies', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING
      },

      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      contact: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },

      address: {
        allowNull: false,
        type: Sequelize.STRING
      },

      neighborhood: {
        allowNull: false,
        type: Sequelize.STRING
      },

      city: {
        allowNull: false,
        type: Sequelize.STRING
      },

      state: {
        allowNull: false,
        type: Sequelize.STRING
      },

      number: {
        allowNull: false,
        type: Sequelize.STRING
      },

      complement: {
        type: Sequelize.STRING
      },

      rh_analyst_name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      supervisor_name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  
  },

  async down (queryInterface, Sequelize) {
  
   await queryInterface.dropTable('companies');
 
  }
};
