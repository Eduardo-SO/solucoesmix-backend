module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('customers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      responsible: {
        type: Sequelize.STRING,
      },
      cnpj: {
        type: Sequelize.STRING,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      contract_due: {
        type: Sequelize.DATE,
      },
      comments: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: queryInterface => queryInterface.dropTable('customers'),
};
