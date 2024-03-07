import { Table, Column, Model, HasMany } from "sequelize-typescript";
import Property from "./property.model";

@Table({ timestamps: false })
export default class Users extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  wallet_address?: string;

  @HasMany(() => Property, {
    as: "publishedProperties",
    foreignKey: "user_id",
  })
  property: Property[] = [];
}
