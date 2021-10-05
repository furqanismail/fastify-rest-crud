const heroRoutes = require('../controller/admin/hero')

async function routes(fastify, options) {

    fastify.get('/hero', heroRoutes.get)
    fastify.post('/hero', heroRoutes.create())
}

module.exports = routes