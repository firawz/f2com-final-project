'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('KeranjangProduks', {
      fields: ['KeranjangId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_KeranjangId',
      references: { //Required field
        table: 'Keranjangs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }).then(()=>{
      return queryInterface.addConstraint('KeranjangProduks', {
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
    return queryInterface.removeConstraint('KeranjangProduks', 'custom_fkey_constraint_KeranjangId', {})
    .then(()=>{
      return queryInterface.removeConstraint('KeranjangProduks', 'custom_fkey_constraint_ProdukId', {})
    })
  }
};
