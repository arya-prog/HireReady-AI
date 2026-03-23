import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      res.status(400).json({ message: "user dosn't have a token" });
    }
    const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifytoken) {
      res.status(400).json({ message: "user dosn't have a valid token" });
    }
    req.userId = verifytoken.userId;
    next();
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: `fail to authanticate user ${error}` });
  }
};

export default { isAuth };
