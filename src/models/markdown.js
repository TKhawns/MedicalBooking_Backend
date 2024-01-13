'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Markdown.init(
        {
            // id: DataTypes.INTEGER,
            doctor_id: DataTypes.INTEGER,
            clinic_id: DataTypes.INTEGER,
            specialty_id: DataTypes.INTEGER,
            content_html: DataTypes.STRING,
            content_markdown: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Markdown',
        },
    );
    return Markdown;
};
