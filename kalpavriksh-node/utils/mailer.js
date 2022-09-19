const [nodemailer] = [require("nodemailer")];

exports.OtpMailer = async (email, otp,) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "OTP Verification",
        text: "OTP Verification.",
        html: `Please use this otp to login. ${otp}`,
      };
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err.message);
      return;
    }
  }