'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[{
      name:"Chaudhry Charan Singh International Airport",
      adress:"Amausi,Luknow",
      createdAt: new Date(),
      updatedAt: new Date(),
      cityId:4
    },{
      name:"Indira Gandhi International Airport",
      adress:"erminal-3,New Delhi-110 037. INDIA",
      cityId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airports',null,{});
  }
};
