const { Hero } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, reply) => {
    const data = req.body
    const schema = {
        title: 'string|empty:false',
        image: 'string|empty:false',
        description: 'string|empty:false',
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
    await Hero.create(data)

    return reply
        .code(200)
        .send({
            status: 'success',
            message: 'data add successfully'
        })

}