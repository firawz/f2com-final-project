'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('Keranjangs', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(()=>{
      return queryInterface.addConstraint('Keranjangs', {
        fields: ['ProdukId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_ProdukId',
        references: { //Required field
          table: 'Produks',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint('KeranjangProduks', 'custom_fkey_constraint_UserId', {})
    .then(()=>{
      return queryInterface.removeConstraint('KeranjangProduks', 'custom_fkey_constraint_ProdukId', {})
    })
  }
};
