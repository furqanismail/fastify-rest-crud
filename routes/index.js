const heroRoutes = require('../controller/admin/hero')

async function routes(fastify, options) {
    fastify.get('/hero', heroRoutes.get)
    fastify.post('/hero', heroRoutes.create)
    fastify.put('/hero/:id', heroRoutes.update)
    fastify.delete('/hero/:id', heroRoutes.destroy)
}

module.exports = routes