const uuid = require("uuid");
const { Device, DeviceInfo } = require("../models/models");
const apiError = require("../error/apiError");
const path = require("path");
const ApiError = require("../error/apiError");
class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            device: device.id,
          });
        });
      }

      return res.json(device);
    } catch (error) {
      next(apiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page, info } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({ where: { id } });
      if (!device) {
        return next(ApiError.notFound("Device not found"));
      }
      await device.destroy();
      return res.json({ message: "Device deleted successfully" });
    } catch (error) {
      next(ApiError.internal("Failed to delete device"));
    }
  }
}

module.exports = new DeviceController();
