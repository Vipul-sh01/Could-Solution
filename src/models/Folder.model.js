const FolderModel = (sequelize, DataTypes) => {
    return sequelize.define('Folder', {
        folderid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ownerid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userid',
            },
        },
        parentfolderid: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Folder',
                key: 'folderid',
            },
            defaultValue: null,
        },
    }, {
        timestamps: true,
        tableName: 'Folder',
    });
};

export {FolderModel};
