class Images {
  static sendOne = async (req, res, next) => {
    res.sendFile("uploads/" + req.params.name, { root: "./" });
  };
}

module.exports = Images;
