const {uuid} = require('uuidv4');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Flashcards', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
    await queryInterface.addColumn(
      "Flashcards",
      "subcategory_id",
      {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Subcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
    await queryInterface.addColumn(
      "Flashcards",
      "owner_id",
      {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
    await queryInterface.addColumn(
      "Flashcards",
      "created_by_user_id",
      {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Flashcards');
  }
};
