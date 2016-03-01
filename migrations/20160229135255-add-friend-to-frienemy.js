'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'frienemy',
      'friend',
      Sequelize.BOOLEAN
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'frienemy',
      'friend'
    );

  }
};


