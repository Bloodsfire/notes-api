const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

export default  {
    HOST: DB_HOST || 'localhost',
    USER: DB_USER,
    PASSWORD: DB_PASS,
    DB: DB_NAME || 'notes',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};