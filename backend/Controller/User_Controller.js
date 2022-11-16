import User from "./../Models/UserModel";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import Joi from "joi";

const createUser = async (req, res, next) => {
  try {
    const { email, username, password } = await req.body;

    // verify username
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        message: "email does exist ! ",
      });

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
        username,
        password: hashPassword,
      });

      newUser.save();
      res.status(200).json(newUser);

      next();
    }
  } catch (err) {
    console.log("ERORR : ", err);
  }
};

const loginUser = async (req, res, next) => {
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
    const validatePassword = bcrypt.compare(password, user.password);

    if (!validatePassword) {
      res.status(400).json({
        message: "wrong password !",
      });
    }

    // set JWT
    const key = process.env.SECRET || "HaMeD_Zeidabadi";

    const payload = {
      id: user.id,
      email: user.email,
    };

    await JWT.sign(
      payload,
      key,
      {
        expiresIn: 3600 * 24 * 7,
      },

      (err, token) => {
        if (err) {
          res.status(400).json({
            message: err,
          });
        }
        res.status(200).json({ token });
      }
    );
    next();
  } catch (err) {
    console.log("ERORR : ", err);
  }
};

export { createUser, loginUser };
