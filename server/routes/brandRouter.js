const Router = require("express");
const brandController = require("../controllers/brandController");
const checkRoleMiddleware = require("../midleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware("ADMIN"), brandController.create);
router.get("/", brandController.getAll);
router.delete("/:id", brandController.delete); 

module.exports = router;
