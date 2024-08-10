const ApiError = require("../error/apiError");

module.exports = function (err, req, res, next) {
  console.error("Error:", err);

  if (err instanceof ApiError) {
    return res.status(err.status || 500).json({ message: err.message });
  }

  return res.status(500).json({ message: "Unexpected error" });
};
