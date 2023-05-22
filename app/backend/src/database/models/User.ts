import { DataTypes, Model } from 'sequelize';
import db from '.';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export type UserCreationAttributes = Omit<UserAttributes, 'id' | 'isAdmin'>;

class User extends Model <UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare isAdmin: boolean;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  underscored: false,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
