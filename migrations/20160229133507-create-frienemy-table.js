'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('frienemy',
      {
        name: Sequelize.STRING,
        birthday: Sequelize.DATE
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('frienemy');
  }
};
