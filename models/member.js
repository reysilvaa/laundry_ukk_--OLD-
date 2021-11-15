'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class member extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.transaksi, {
                foreignKey: "id_member",
                as: "transaksi member"
            })
        }
    };
    member.init({
        id_member: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: DataTypes.STRING,
        alamat: DataTypes.STRING,
        jenis_kelamin: DataTypes.STRING,
        tlp: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'member',
        tableName: 'member',
    });
    return member;
};