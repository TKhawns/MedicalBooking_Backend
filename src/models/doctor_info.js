'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Doctor_info.init(
        {
            // id: DataTypes.INTEGER,
            doctor_id: DataTypes.INTEGER,
            price_id: DataTypes.INTEGER,
            province_id: DataTypes.INTEGER,
            payment_id: DataTypes.INTEGER,
            address_clinic: DataTypes.STRING,
            name_clinic: DataTypes.STRING,
            note: DataTypes.STRING,
            count: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Doctor_info',
        },
    );
    return Doctor_info;
};
