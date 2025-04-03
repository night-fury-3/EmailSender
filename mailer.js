import dotenv from "dotenv";
import { writeFile, utils } from "xlsx";
import users from "./users.js";
import { getEmailSenderbyOrder } from "./core/selection/email.js";
import { getRandomHeading } from "./core/selection/heading.js";
import { getRandomTemplate } from "./core/selection/template.js";
import { sendEmailContent } from "./core/emailDeliver.js";

dotenv.config();

const userList = users;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to format date and time for the filename
const formatDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-11
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
};

let prevUserName = "";
let sender = "";
let curIndex = -1;

const sendEmailsToAllUsers = async () => {
  const logs = []; // Array to hold log information

  for (const user of userList) {
    // Checking username and choose random sender email if username changes
    if (sender === "" || user?.name !== prevUserName) {
      sender = getEmailSenderbyOrder(curIndex);
      prevUserName = user?.name;
      curIndex = curIndex + 1;
    }

    // Select random heading and template content
    const heading = getRandomHeading();
    const template = getRandomTemplate(user?.name, heading?.heading);
    const log = await sendEmailContent(
      sender,
      user,
      heading?.subject,
      template
    );

    // Add log information to the logs array
    logs.push({
      sender: sender?.email,
      name: user.name,
      email: user.email,
      subject: heading.subject,
      log: log, // You can adjust what log information to store
    });

    await sleep(5000); // Delay of 1000 milliseconds (1 second) between each email
  }

  // Convert logs array to worksheet
  const ws = utils.json_to_sheet(logs);

  // Create a new workbook and append the worksheet
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Email Logs");

  // Generate the filename with current date and time
  const timestamp = formatDateTime();
  const filename = `email_logs_${timestamp}.xlsx`;

  // Write to an XLSX file
  writeFile(wb, filename);

  console.log(
    `All emails have been processed, and logs have been saved to ${filename}.`
  );
};

// Start sending emails
sendEmailsToAllUsers().catch((err) => {
  console.error("Error in sending emails:", err);
});
