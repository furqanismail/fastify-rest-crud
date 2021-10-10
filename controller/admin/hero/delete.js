const { Hero } = require('../../../models')

module.exports = async (req, reply) => {
    const id = req.params.id
    const hero = await Hero.findOne(id)
    if(!hero){
        return reply
            .code(404)
            .send({
                status: 'error',
                message: 'data not found'
            })
    }

    await Hero.destroy({
        where: { id: id }
    })

    return reply
        .code(200)
        .send({
            status: 'success',
            message: 'data delete successfully'
        })
}