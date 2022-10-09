require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
    if (!process.env.PORT) {
        throw new Error('NO .env.PORT in production')
    }
}

module.exports = {
    PORT: Number(process.env.PORT) || 80,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DIST_DIR: process.env.DIST_DIR || 'dist'
};