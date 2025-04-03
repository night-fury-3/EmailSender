import emailCredentials from "../../emailCredentials.js";

export const getRandomEmailSender = () => {
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

export const getEmailSenderbyOrder = (prevIndex) => {
  const senderLists = emailCredentials;
  let nextIndex = 0;
  if (prevIndex + 1 < senderLists.length) nextIndex = prevIndex + 1;

  console.log(`Next Selected Email: ${senderLists[nextIndex].email}`);
  console.log(`Next Selected Password: ${senderLists[nextIndex].password}`);

  return senderLists[nextIndex];
};
