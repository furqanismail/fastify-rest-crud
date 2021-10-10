const { Hero } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, reply) => {
    const data = req.body
    const schema = {
        title: 'string',
        image: 'string',
        description: 'string',
    }

    const validate = v.validate(data, schema)
    if(validate.length){
        return reply
            .code(400)
            .send({
                status: 'error',
                message: validate
            })
    }

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
    await Hero.update(data)


    return reply
        .code(200)
        .send({
            status: 'success',
            message: 'data update successfully'
        })

}