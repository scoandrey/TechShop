const apiError = require("../error/apiError");

module.exports = function (err, req, res, next) {
  console.error("Error:", err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Unexpected error" });
};
