const VersionModel = (sequelize, DataTypes) => {
    return sequelize.define('Version', {
        versionid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        file_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'File',
                key: 'fileid',
            },
        },
        versionnumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userid',
            },
        },
    }, {
        timestamps: true,
        tableName: 'Version',
    });
};

export {VersionModel};
