'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('contracts', 
    { id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    trainees_id:{
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'trainees',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    categoty_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references:{
        model:'categories',
        key: id
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    company_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references:{
        model: 'companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    start_validity: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    end_validity: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    remuneration: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    extra: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }

});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('contracts');
    
  }
};
