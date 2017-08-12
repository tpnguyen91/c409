const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  mongo: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT
  },
  JWT: {
    SECRET: process.env.SECRET || '3VWJF92xptoQPdfeLuMw',
    EXPIRE_TIME: process.env.EXPIRE_TIME || 60 * 60 * 24 * 10 ** 10,
  },
};

export default config;
