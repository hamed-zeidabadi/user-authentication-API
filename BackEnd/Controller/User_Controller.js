const { User } = require("./../Models/User_Model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const Joi = require("joi");

//@POST /api/register
exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = await req.body;
    // verify username
    const user = await User.findOne({ email });
    if (user) res.status(400).json({ message: "email does exist ! " });
    // data Validation
    const Schema = Joi.object({
      email: Joi.string().min(3).max(255).email().required(),
      username: Joi.string().min(2).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    });
    const result = await Schema.validate({
      email,
      username,
      password,
    });
    if (result.error) return res.send(result.error.message);

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    // create new user
    const newUser = await new User({
      email,
      username,
      password: hashPassword,
    });

    newUser.save();

    // set JWT
    const secret = process.env.SECRET || "HaMeD_Zeidabadi";

    const payload = {
      id: newUser.id,
      email: newUser.email,
    };

    const token = JWT.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: payload,
      },
      secret
    );

    if (token) {
      res.status(200).json({ token });
    }
    next();
  } catch (err) {
    console.log("ERORR : ", err);
  }
};

//@GET /api/users
exports.allUser = async (req, res, next) => {
  try {
    // verify username
    const users = await User.find({}).select("-password");
    if (!users) {
      res.status(404).json({
        message: "user does not exist ! ",
      });
    }
    res.status(200).json({ users });

    next();
  } catch (err) {
    console.log("ERORR : ", err);
  }
};

//@POST /api/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = await req.body;

    // verify username
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "email does not exist ! ",
      });
    }

    // verify password
    const auth = await bcrypt.compare(password, user.password);
    console.log(auth);
    if (!auth) {
      res.status(400).json({
        message: "wrong password !",
      });
    }

    // set JWT
    const secret = process.env.SECRET || "HaMeD_Zeidabadi";

    const token = JWT.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      secret
    );

    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(500).json({
        message: "server is .. !",
      });
    }

    next();
  } catch (err) {
    console.log("ERORR : ", err);
  }
};
