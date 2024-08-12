const Router = require('express')
const deviceController = require('../controllers/deviceController')
const checkRoleMiddleware = require('../midleware/checkRoleMiddleware')
const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.delete("/:id", deviceController.delete);

module.exports = router