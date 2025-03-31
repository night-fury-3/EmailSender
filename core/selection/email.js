import emailCredentials from "../../emailCredentials.js";

export const getEmailSender = () => {
  const senderLists = emailCredentials;

  // Function to get a random email credential
  const randomIndex = Math.floor(Math.random() * senderLists.length);
  // Use randomCredential
  console.log(`Randomly Selected Email: ${senderLists[randomIndex].email}`);
  console.log(
    `Randomly Selected Password: ${senderLists[randomIndex].password}`
  );

  return senderLists[randomIndex];
};
