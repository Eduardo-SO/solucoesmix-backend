import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        responsible: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        cpf: Sequelize.STRING,
        contract_due: Sequelize.DATE,
        comments: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Customer;
