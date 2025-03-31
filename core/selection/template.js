export const getRandomTemplate = (username, heading) => {
  const template01 = `<html> \
    <head> \
      <title>Collaboration Proposal</title> \
    </head> \
    <body> \
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="border: 2px solid #0073e6; border-radius: 10px; padding: 20px;"> \
        <tbody> \
          <tr> \
            <td style="display:flex;flex-direction:row;padding:20px;text-align:center;align-items: center;gap: 20px;"> \
                <img   \
                src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png"   \
                style="width: 70px; height: 70px;"   \
                alt="Coverletter icon"   \
                >  \
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
                I have a strong preference for working with U.S. clients and developers due to your clear vision and high standards. The innovation in the U.S. tech scene closely aligns with my professional ethos, and I genuinely believe that such partnerships can lead to remarkable results. \
              </p> \
              <p style="font-size: 16px; line-height: 1.5"> \
                Recently, my Upwork account was permanently blocked, which has limited my ability to connect with clients on one of the world’s largest marketplaces. Collaborating with a U.S.-based developer like you would allow me to utilize your Upwork account for upcoming projects, as long as it is not currently in use. \
              </p> \
            </td> \
          </tr> \
          <tr> \
            <td> \
              <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
                Proposal Overview \
              </h3> \
              <p style="font-size: 16px; line-height: 1.5"> \
                I propose to use your Upwork account for my project engagements, assuming it's available. This partnership would not only help us effectively cater to U.S. clients but also ensure high-quality deliverables through my expertise. \
              </p> \
            </td> \
          </tr> \
          <tr> \
            <td> \
              <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
                Income Sharing Model \
              </h3> \
              <p style="font-size: 16px; line-height: 1.5"> \
                I suggest we establish a fair income-sharing model for any projects secured through your Upwork account, based on a mutually agreed percentage. This ensures that both of us are adequately compensated for our contributions. \
              </p> \
              <p style="font-size: 16px; line-height: 1.5"> \
                If this proposal aligns with your interests, I would be eager to discuss the details further. Below are links to my <b>portfolio</b> and <b>social media profiles</b> for your review: \
              </p> \
              <div style="display: flex"> \
                <a href="https://twitter.com/JamesTX0108" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="X icon"   \
                    >  \
                </a> \
                <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="Github icon"   \
                  >  \
                </a> \
                <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;"> \
                  <img   \
                      src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png"   \
                      style="width: 40px; height: 40px;"   \
                      alt="Protfolio icon"   \
                  >  \
                </a> \
              </div> \
            </td> \
          </tr> \
          <tr> \
            <td style="margin-top: 20px"> \
              <p style="font-size: 16px; line-height: 1.5"> \
                Thank you for considering this collaboration. I am looking forward to the opportunity to work together and achieve great results. I hope to hear from you soon!<br /> \
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
  const template02 = `<html> \
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
            <img   \
            src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png"   \
            style="width: 70px; height: 70px;"   \
            alt="Coverletter icon"   \
            >  \
            <h1 style="color: #2c2c2c; margin-left: 20px"> \
              ${heading} \
            </h1> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Dear <b>${username}</b>,<br /> \
              I hope this message finds you well. My name is <b>James Haruki</b>, a full-stack blockchain developer based in Japan. I am reaching out to explore a promising opportunity for long-term collaboration that could bring great value to both of us. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Why Collaborate with a U.S. Developer? \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I truly enjoy working with U.S. clients and collaborating with U.S. developers due to the clarity of vision and high standards that characterize your approach. The innovative spirit of the U.S. tech industry closely aligns with my professional values, and I believe our partnership could lead to exceptional results. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Recently, my Upwork account was permanently blocked, which has hindered my ability to connect with clients on one of the world's largest marketplaces. By partnering with a U.S.-based developer like yourself, I aim to leverage your Upwork account for project engagements, assuming it is not currently in use. This would enable us to jointly tap into the U.S. market effectively. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Proposal Overview \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I propose the utilization of your Upwork account for my project engagements. This partnership would allow us to efficiently serve clients in the U.S. while ensuring high-quality deliverables through my expertise. \
            </p> \
          </td> \
        </tr> \
        <tr> \
          <td> \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;"> \
              Income Sharing Model \
            </h3> \
            <p style="font-size: 16px; line-height: 1.5"> \
              I suggest we establish a fair income-sharing model for any projects secured through your Upwork account, based on a mutually agreed percentage. This ensures that both of us are fairly compensated for our efforts and investments. \
            </p> \
            <p style="font-size: 16px; line-height: 1.5"> \
              If this proposal resonates with you, I would welcome the opportunity to discuss the details further. Below are links to my <b>portfolio</b> and <b>social media profiles</b> for your consideration: \
            </p> \
            <div style="display: flex"> \
                <a href="https://twitter.com/JamesTX0108" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="X icon"   \
                    >  \
                </a> \
                <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="Github icon"   \
                  >  \
                </a> \
                <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;"> \
                  <img   \
                      src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png"   \
                      style="width: 40px; height: 40px;"   \
                      alt="Protfolio icon"   \
                  >  \
                </a> \
            </div> \
          </td> \
        </tr> \
        <tr> \
          <td style="margin-top: 20px"> \
            <p style="font-size: 16px; line-height: 1.5"> \
              Thank you for considering this collaboration. I am excited about the potential of working together and what we can achieve as a team. I look forward to your response!<br /> \
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
  const template03 = `<html> \
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
            <img   \
            src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png"   \
            style="width: 70px; height: 70px;"   \
            alt="Coverletter icon"   \
            >  \
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
                  <img   \
                    src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="X icon"   \
                    >  \
                </a> \
                <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="Github icon"   \
                  >  \
                </a> \
                <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;"> \
                  <img   \
                      src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png"   \
                      style="width: 40px; height: 40px;"   \
                      alt="Protfolio icon"   \
                  >  \
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
  const template04 = `<html> \
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
            <img   \
            src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png"   \
            style="width: 70px; height: 70px;"   \
            alt="Coverletter icon"   \
            >  \
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
                  <img   \
                    src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="X icon"   \
                    >  \
                </a> \
                <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;"> \
                  <img   \
                    src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png"   \
                    style="width: 40px; height: 40px;"   \
                    alt="Github icon"   \
                  >  \
                </a> \
                <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;"> \
                  <img   \
                      src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png"   \
                      style="width: 40px; height: 40px;"   \
                      alt="Protfolio icon"   \
                  >  \
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

  const templates = [template01, template02, template03, template04];

  const randomIndex = Math.floor(Math.random() * templates.length);

  return templates[randomIndex];
};
