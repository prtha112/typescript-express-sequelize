import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";

export class Category extends Model {
  public id!: number;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface CategoryInterface {
  name: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "category",
    sequelize: database,
  }
);

Category.sync({force: true}).then(() => console.log("Link table created"))