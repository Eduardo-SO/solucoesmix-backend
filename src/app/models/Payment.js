import Sequelize, { Model } from 'sequelize';

class Payment extends Model {
  static init(sequelize) {
    super.init(
      {
        customer_id: Sequelize.INTEGER,
        due_date: Sequelize.DATE,
        paid_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
  }
}

export default Payment;
