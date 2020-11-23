export default function (sequelize, DataTypes) {
    const Note = sequelize.define('note', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        text: {
            type: DataTypes.STRING(1000),
            validate: {
                notEmpty: true
            }
        }
    });

    Note.associate = (models) => {
        Note.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Note;
};