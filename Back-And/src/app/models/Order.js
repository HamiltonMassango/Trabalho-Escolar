import { Model, DataTypes } from 'sequelize';
class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        products: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'idUser', as: 'user' });
  }
}

export default Order;
