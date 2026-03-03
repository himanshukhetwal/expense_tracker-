const nodemailer = require("nodemailer");

async function sendAlert(email, message) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "🚨 Expense Alert",
    text: message,
  });
}

module.exports = sendAlert;
