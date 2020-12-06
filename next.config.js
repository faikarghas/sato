require('dotenv').config();

// module.exports = {
//   env: {
//     MYSQL_HOST: process.env.MYSQL_HOST,
//     MYSQL_DATABASE: process.env.MYSQL_DATABASE,
//     MYSQL_USER: process.env.MYSQL_USER,
//     MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
//     MYSQL_PORT: process.env.MYSQL_PORT,
//   }
// };

const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        // dest: 'public', // comment out this line
        register: true,
        sw: '/sw.js',
        scope:'/'
    }
})