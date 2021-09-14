function notFoundMiddleware(_, res) {
  return res.status(404).json({ message: "Not found" });
}

module.exports = {
  notFoundMiddleware,
};
