'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      title: 'Post 1',
      content: 'Content 1',
      photo: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
      title: 'Post 2',
      content: 'Content 2',
      photo: 'https://placehold.co/600x400/EEE/31343C',
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
