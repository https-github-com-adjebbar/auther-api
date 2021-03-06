const constants = require('../models/users/users.constants')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        role: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: constants.role.RECIPIENT
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: constants.status.INACTIVE
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ''
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
