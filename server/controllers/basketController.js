const { BasketDevice, Basket, Device } = require("../models/models");
const ApiError = require("../error/apiError");

class BasketController {
  async addDevice(req, res, next) {
    try {
      const { deviceId } = req.body;
      const userId = req.user.id;
      const basket = await Basket.findOne({ where: { userId } });
      const basketDevice = await BasketDevice.create({
        basketId: basket.id,
        deviceId,
      });
      return res.json(basketDevice);
    } catch (error) {
      next(ApiError.internal("Failed to add device to basket"));
    }
  }

  async getBasket(req, res, next) {
    try {
      const userId = req.user.id;
      const basket = await Basket.findOne({
        where: { userId },
        include: [{ model: BasketDevice, include: [Device] }],
      });
      return res.json(basket);
    } catch (error) {
      next(ApiError.internal("Failed to retrieve basket"));
    }
  }

  async removeDevice(req, res, next) {
    try {
      const { deviceId } = req.body;
      const userId = req.user.id;
      const basket = await Basket.findOne({ where: { userId } });
      const basketDevice = await BasketDevice.destroy({
        where: { basketId: basket.id, deviceId },
      });
      if (basketDevice) {
        return res.json({ message: "Device removed from basket" });
      } else {
        return next(ApiError.internal("Failed to remove device from basket"));
      }
    } catch (error) {
      next(ApiError.internal("Failed to remove device from basket"));
    }
  }
}

module.exports = new BasketController();
