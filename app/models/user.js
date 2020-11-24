import bcrypt from 'bcrypt';

export default function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [5]
            }
        }
    });

    User.beforeSave(user => {
        if (user.password) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Note, { onDelete: 'CASCADE' });
    };

    return User;
};