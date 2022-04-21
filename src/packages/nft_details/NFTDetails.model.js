const { DataTypes } = require('sequelize')
const sequelize = require('../../utils/DBConnection')

const NFTDetails = sequelize.define('nft_details', {
  id: { type: DataTypes.STRING, primaryKey: true },
  tnx_hash: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  tnx_type: { type: DataTypes.STRING, allowNull: false },
  datetime: { type: DataTypes.DATE, allowNull: false },
  tnx_sol_amount: { type: DataTypes.REAL, allowNull: false },
  tnx_usd_amount: { type: DataTypes.REAL, allowNull: false },
  from_address: { type: DataTypes.STRING, allowNull: false },
  to_address: { type: DataTypes.STRING, allowNull: false },
  collectionName: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
  mint: { type: DataTypes.STRING, allowNull: false },
  auction: { type: DataTypes.JSON, allowNull: false}
}, {
  paranoid: true,
  timestamps: true
})

module.exports = NFTDetails
