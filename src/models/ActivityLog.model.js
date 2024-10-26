const ActivityLogModel = (sequelize, DataTypes) => {
    return sequelize.define('ActivityLog', {
        activityid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'userid',
            },
        },
        fileid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'File',
                key: 'fileid',
            },
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: true,
        tableName: 'ActivityLog',
    });
};

export {ActivityLogModel};
