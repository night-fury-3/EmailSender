const template03 = (username, heading) => {
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
              I hope this message finds you well. I am James Haruki, a full-stack blockchain developer based in Japan, reaching out to discuss a potential collaboration that could benefit both of us. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Why Collaborate with a U.S. Developer? \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I have a strong preference for working with U.S. clients and collaborating with U.S. developers due to the high standards and clear vision present in your projects. The innovation in the U.S. tech landscape aligns well with my professional goals, and I believe that our partnership could lead to remarkable outcomes. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Recently, my Upwork account was permanently blocked, which has limited my ability to connect with potential clients on one of the world’s largest marketplaces. Collaborating with a U.S.-based developer like you would allow me to leverage your Upwork account to access opportunities in the U.S. market, thus maximizing our expertise and capabilities. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Proposal Overview \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I would like to propose utilizing your Upwork account for project engagements, provided it remains unused. This partnership would enable us to effectively cater to U.S. clients while delivering high-quality results through my skill set. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Income Sharing Model \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I suggest we create an income-sharing model for any projects secured through your Upwork account, built on a mutually agreed percentage. This approach ensures that both parties are appropriately compensated for our contributions. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              If this proposal aligns with your interests, I would be eager to discuss the details further. Below are links to my <b>portfolio</b> and <b>social media profiles</b> for your review: \
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
              Thank you for considering this collaboration. I am excited about the potential of working together and look forward to your response!<br /> \
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

export default template03;
