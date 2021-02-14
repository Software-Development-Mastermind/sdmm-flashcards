'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Category_Users', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
      },
      create_at: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
      "Category_Users",
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
      "Category_Users",
      "user_id",
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
    await queryInterface.addColumn(
      "Category_Users",
      "assigned_by_user_id",
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
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Category_Users');
  }
};
