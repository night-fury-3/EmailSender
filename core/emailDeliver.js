import nodemailer from "nodemailer";

export const sendEmailContent = async (sender, recevier, subject, content) => {
  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sender?.email,
      pass: sender?.password,
    },
  });
  const mailOptions = {
    from: sender?.email,
    to: recevier?.email,
    subject: subject,
    html: content,
  };

  let log = "";

  try {
    const info = await transporter.sendMail(mailOptions);
    log = `✅ Email sent to ${recevier?.email} ${recevier?.name}: ${info.response}`;
  } catch (error) {
    log = `❌ Error sending email to ${receiver?.email} ${receiver?.name}: ${error.message}`;
  }

  console.log(log);

  return log;
};
