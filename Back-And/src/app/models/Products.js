import { Model, DataTypes } from 'sequelize';
class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        descrition: DataTypes.STRING,
        url: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Product;
