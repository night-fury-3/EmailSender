const template04 = (username, heading) => {
  return `<html> \
  <head> \
    <title>Collaboration Proposal</title> \
  </head> \
  <body> \
    <table \
      align="center" \
      border="0" \
      cellpadding="0" \
      cellspacing="0" \
      style="border: 2px solid #0073e6; border-radius: 10px; padding: 20px" \
    > \
      <tbody> \
        <tr> \
          <td \
            style=" \
              display: flex; \
              flex-direction: row; \
              padding: 20px; \
              text-align: center; \
              align-items: center; \
              gap: 20px; \
            " \
          > \
            <img \
              src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png" \
              style="width: 70px; height: 70px" \
              alt="Collaboration icon" \
            /> \
            <h1 style="color: #2c2c2c; margin-left: 20px"> \
              ${heading} \
            </h1> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Dear <b>${username}</b>,<br /> \
              I hope this message finds you well. My name is <b>James Haruki</b>, and I am a full-stack blockchain developer based in Japan. I am reaching out to explore an exciting opportunity for long-term collaboration that could provide significant value for both of us. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Why Collaborate with a U.S. Developer? \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I truly enjoy working with U.S. clients and collaborating with U.S. developers due to the clear vision and high standards evident in your approach. The innovative spirit of the U.S. tech industry aligns perfectly with my professional values, and I believe that our partnership could result in outstanding outcomes. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Recently, my Upwork account was permanently blocked, which has limited my ability to connect with clients on one of the largest marketplaces that facilitates communication between developers and U.S. clients. By collaborating with you, I hope to leverage your Upwork account, should it be available, to regain access to this vital market and successfully tackle a variety of projects together. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Proposal Overview \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I propose utilizing your Upwork account for my project engagements, assuming it is not currently in use. This partnership would empower us to effectively cater to the U.S. market while ensuring high-quality deliverables through my expertise. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Income Sharing Model \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I suggest establishing a fair income-sharing model for any projects secured through your Upwork account, based on a mutually agreed percentage. This approach ensures that both parties are fairly compensated for our contributions. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              If this proposal resonates with you, I would be eager to discuss the specifics further. Below are links to my <b>portfolio</b> and <b>social media profiles</b> for your review: \
            </p> \
            <div style="display: flex"> \
              <a href="https://twitter.com/JamesTX0108" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                <img src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png" style="width: 40px; height: 40px" alt="Twitter icon" /> \
              </a> \
              <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png" style="width: 40px; height: 40px" alt="GitHub icon" /> \
              </a> \
              <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;"> \
                <img src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png" style="width: 40px; height: 40px" alt="Portfolio icon" /> \
              </a> \
            </div> \
          </td> \
        </tr> \
        <tr> \
          <td style="margin-top: 20px"> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Thank you for considering this collaboration. I am excited about the possibility of working together and the potential we can unlock. I look forward to your response!<br /> \
              Best regards,<br /> \
              <b>James Haruki</b> \
            </p> \
          </td> \
        </tr> \
      </tbody> \
    </table> \
  </body> \
</html> \
  `;
};

export default template04;
