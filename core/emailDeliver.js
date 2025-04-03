import nodemailer from "nodemailer";

// Email and full name validation functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// const isValidFullName = (fullName) => {
//   return typeof fullName === "string" && fullName.trim().split(" ").length >= 2;
// };

export const sendEmailContent = async (sender, receiver, subject, content) => {
  if (!receiver || !receiver.email || !receiver.name) {
    console.error("❌ Missing receiver information.");
    return "❌ Missing receiver information.";
  }

  // Validate receiver email
  if (!isValidEmail(receiver.email)) {
    console.error(`❌ Invalid email format for: ${receiver.email}`);
    return `❌ Invalid email format for: ${receiver.email}`;
  }

  // // Validate receiver full name
  // if (!isValidFullName(receiver.name)) {
  //   console.error(`❌ Invalid full name for: ${receiver.name}`);
  //   return `❌ Invalid full name for: ${receiver.name}`;
  // }

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
    to: receiver?.email,
    subject: subject,
    html: content,
  };

  let log = "";

  try {
    const info = await transporter.sendMail(mailOptions);
    log = `✅ Email sent to ${receiver.email} (${receiver.name}): ${info.response}`;
  } catch (error) {
    log = `❌ Error sending email to ${receiver.email} (${receiver.name}): ${error.message}`;
  }

  console.log(log);
  return log;
};
