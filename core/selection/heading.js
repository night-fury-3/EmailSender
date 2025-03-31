import headings from "../../template/heading/headings.js";

export const getRandomHeading = () => {
  const headingList = headings;

  // Function to get a random email credential
  const randomIndex = Math.floor(Math.random() * headingList.length);
  // Use randomCredential
  console.log(`Randomly Selected Subject: ${headingList[randomIndex].subject}`);
  console.log(`Randomly Selected Heading: ${headingList[randomIndex].heading}`);

  return headingList[randomIndex];
};
