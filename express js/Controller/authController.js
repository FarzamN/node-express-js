const home = async (req, res) => {
  try {
    res.status(200).send({ message: "hellow" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ hello: req.body });
  } catch (err) {
    res.status(400).send({ message: "can not rount your register" });
  }
};

module.exports = { home, register };
