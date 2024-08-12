const { Type } = require("../models/models");
const ApiError = require("../error/apiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const type = await Type.findOne({ where: { id } });
      if (!type) {
        return next(ApiError.notFound("Type not found"));
      }
      await type.destroy();
      return res.json({ message: "Type deleted successfully" });
    } catch (error) {
      next(ApiError.internal("Failed to delete type"));
    }
  }

}

module.exports = new TypeController();
