'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
    {
      title:"The International 2019",
      category_id:1,
      starttime:"2020-01-10 10:00",
      endtime:"2020-01-15 10:00",
      price:"500000",
      desc:"The International 2019 will take places in China with $30 Million Prize-pool",
      address:"Guangzhou, China",
      urlmap:"Kosong dulu",
      image:"https://cms.dailysocial.id/wp-content/uploads/2019/07/c3a1f017b195ac17dba52facb685f09a_featuredxxcr.jpg",
      user_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
