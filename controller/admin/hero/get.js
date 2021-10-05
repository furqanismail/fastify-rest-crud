const { Hero } = require('../../../models')

module.exports = async (req, res) => {
    const hero = Hero.findAll()
    return res.json({
        status: 'success',
        data: hero
    })
}