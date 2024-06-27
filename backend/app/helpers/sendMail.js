const nodemailer = require("nodemailer");

const mail = async function (email, password) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const message = {
    from: process.env.MAIL_FROM, // Sender address
    to: email, // List of recipients
    subject: "Activate Account", // Subject line
    html: `<i>To login into your account use this password: ${password}</a></i>`, // Plain text body
  };

  await transporter.sendMail(message, function (err, info) {
    if (err) {
      return false;
    } else {
      return email;
    }
  });
};

module.exports = { mail };
