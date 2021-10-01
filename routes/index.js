// const heroRoutes = require('../controller/admin/hero')

async function routes(fastify, options) {

    fastify.get('/hero', function (req, reply) {
        return reply
            .send("ddd")
    })
}

module.exports = routes