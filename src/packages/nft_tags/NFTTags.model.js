const { DataTypes } = require('sequelize')
const sequelize = require('../../utils/DBConnection')

const NFTTags = sequelize.define('nft_tags', {
  id: { type: DataTypes.STRING, primaryKey: true },
  pub_key: { type: DataTypes.STRING(100), allowNull: false },
  tag_name: { type: DataTypes.STRING(100), allowNull: false },
  metadata: { type: DataTypes.JSON, allowNull: false },
}, {
  paranoid: true,
  timestamps: true
})

module.exports = NFTTags