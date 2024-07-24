const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return next(ApiError.badRequest("Введите корректные логин и пароль"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest("Пользователь уже существует"));
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashPassword, role });
      await Basket.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal("Пользователь не найден"));
      }
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal("Некорректный пароль"));
      }
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async check(req, res, next) {
    try {
      res.json({ message: "Работает" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
