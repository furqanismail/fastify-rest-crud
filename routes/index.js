const heroRoutes = require('../controller/admin/hero')

async function routes(fastify, options) {

    fastify.get('/hero', heroRoutes.get)
}

module.exports = routes