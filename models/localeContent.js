const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class LocaleContent extends Model {};
    LocaleContent.init({
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        field: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        language: {
            type: DataTypes.STRING(4),
            allowNull: false,
        }
    }, {sequelize});
    return LocaleContent;
}