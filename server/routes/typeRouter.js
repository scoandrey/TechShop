const Router = require('express')
const typeController = require('../controllers/typeController')
const checkRole = require('../midleware/checkRoleMiddleware')
const router = new Router()

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
router.delete("/:id", typeController.delete); 

module.exports = router