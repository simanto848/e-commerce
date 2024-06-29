const {
  hashPassword,
  checkEmailExists,
  registerUser,
  comparePassword,
  generateToken,
} = require("../services/authService");

exports.register = async (req, res) => {
  const { first_name, last_name, email, password, phone_number } = req.body;

  try {
    if (!first_name || !last_name || !email || !password || !phone_number) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailExists = await checkEmailExists(email);

    if (emailExists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      const data = {
        first_name,
        last_name,
        email,
        password: hashedPassword,
        phone_number,
      };

      await registerUser(data);
      return res.status(201).json({
        message: "Registration successful",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await checkEmailExists(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = await generateToken(user);
    const tokenOption = {
      httpOnly: true,
      secure: true,
    };

    return res.cookie("token", token, tokenOption).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
