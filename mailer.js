import nodemailer from "nodemailer";
import dotenv from "dotenv";
import users from "./users.js";
import defaultTemplate from "./template/defaultTemplate.js";

dotenv.config();

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const userList = users;

// Async function to send an email
const sendEmail = async (userEmail, username) => {
  const htmlContent = defaultTemplate(username, "Looking for a Long-Term Collaboration");
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `✩░▒▓▆▅▃▂▁🤝𝐋𝐨𝐨𝐤𝐢𝐧𝐠 𝐟𝐨𝐫 𝐚 𝐋𝐨𝐧𝐠-𝐓𝐞𝐫𝐦 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧🤝▁▂▃▅▆▓▒░✩`,
    html: htmlContent,
  };

  try {
    // Await sending the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${username}:`, info.response);
  } catch (error) {
    console.error(`❌ Error sending email to ${username}:`, error.message);
  }
};

// Function to send emails to all users
const sendEmailsToAllUsers = async () => {
  const emailPromises = userList.map((user) =>
    sendEmail(user.email, user.name)
  );

  // Wait for all emails to be sent
  await Promise.all(emailPromises);
  console.log("All emails have been processed.");
};

// Start sending emails
sendEmailsToAllUsers().catch((err) => {
  console.error("Error in sending emails:", err);
});
