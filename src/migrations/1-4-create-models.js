const constants = require('../models/models/models.constants')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Models', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ''
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue: ''
        },
        template: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ''
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: constants.status.ACTIVE
        },
        creatorId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        image: {
          type: Sequelize.TEXT('medium'),
          allowNull: false
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Models')
  }
}
