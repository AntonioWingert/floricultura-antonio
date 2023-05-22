import { DataTypes, Model } from 'sequelize';
import db from '.';

export interface PostAttributes {
  id: number;
  title: string;
  content: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PostCreationAttributes = Omit<PostAttributes, 'id'>;

class Post extends Model <PostAttributes, PostCreationAttributes> {
  declare id: number;
  declare title: string;
  declare content: string;
  declare photo: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

}, {
  underscored: false,
  sequelize: db,
  modelName: 'posts',
  timestamps: true,
});

export default Post;
