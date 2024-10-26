const FileModel = (sequelize, DataTypes) => {
    return sequelize.define('File', {
        fileid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filetype: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
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
        folderid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Folder',
                key: 'folderid',
            },
        },
    }, {
        timestamps: true,
        tableName: 'File',
    });
};

export {FileModel};
