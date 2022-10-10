'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Posts', [{

      text: 'CIS 419 Test 1',

      createdAt: new Date(),

      updatedAt: new Date(),

    },

    {

      text: 'CIS 419 Test 2',

      createdAt: new Date(),

      updatedAt: new Date(),

    }],

    {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Posts', null, {});

  }

};
