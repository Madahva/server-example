import { Table, Column, Model, BelongsTo} from "sequelize-typescript";
import { DataTypes } from "sequelize"; // Needed for specific data types
import User from "./user.model";

@Table({ timestamps: false })
export default class Properties extends Model {

  @Column(DataTypes.JSON)
  location?: {
    country: string;
    region: string;
    city: string;
    address: string;
    postal_code: string;
  };

  @Column
  amenities?: string;

  @Column
  description?: string;

  @Column
  category?: string;

  @Column(DataTypes.JSON)
  images?: string[];

  @Column
  documents?: string;

  @Column
  owner_id?: number;

  @Column
  contract_address?: string;

  @Column(DataTypes.DATE)
  property_creation_time?: Date;

  @Column(DataTypes.DECIMAL)
  mint_price_per_token?: number;

  @Column
  total_shares?: number;

  @Column(DataTypes.DECIMAL)
  total_valuation?: number;

  @Column(DataTypes.DECIMAL)
  annual_yield?: number;

  @Column
  token_duration_months?: number;

  @Column
  listing_duration_months?: number;

  @BelongsTo(() => User, {
    as: "owner",
    foreignKey: "user_id",
  })
  user: User | null = null;
}
