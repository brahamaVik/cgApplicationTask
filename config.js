let sqlServices = {
    'mongodb': {
        dbconnection: process.env.DB_CONNECTION
    },
    'jsonFile': {
        fileName: process.env.JSON_FILE
    },
    'mysql': {
        hostName: process.env.DB_HOST_NAME,
        userName: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        dataName: process.env.DB_DATABASE
    }
}

module.exports = sqlServices;
