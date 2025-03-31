const template01 = (username, heading) => {
  return `<html>  \
  <head>  \
    <title>Collaboration Proposal</title>  \
  </head>  \
  <body>  \
    <table  \
      align="center"  \
      border="0"  \
      cellpadding="0"  \
      cellspacing="0"  \
      style="border: 2px solid #0073e6; border-radius: 10px; padding: 20px"  \
    >  \
      <tbody>  \
        <tr>  \
          <td  \
            style="  \
              display: flex;  \
              flex-direction: row;  \
              padding: 20px;  \
              text-align: center;  \
              align-items: center;  \
              gap: 20px;  \
            "  \
          >  \
            <img  \
              src="https://cdn1.iconfinder.com/data/icons/business-and-profession/128/19-512.png"  \
              style="width: 70px; height: 70px"  \
              alt="Collaboration icon"  \
            />  \
            <h1 style="color: #2c2c2c; margin-left: 20px">  \
              ${heading}  \
            </h1>  \
          </td>  \
        </tr>  \
        <tr>  \
          <td>  \
            <p style="font-size: 16px; line-height: 1.5">  \
              Dear <b>${username}</b>,<br />  \
              I hope this message finds you well! My name is <b>James Haruki</b>, and I am a dedicated <b>full-stack blockchain developer</b> based in Japan. I’m reaching out to explore a potential <b>long-term collaboration</b> that I believe can generate substantial value for both of us.  \
            </p>  \
          </td>  \
        </tr>  \
\
        <tr>  \
          <td>  \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;">  \
              Why I'm Looking for a USA Developer  \
            </h3>  \
            <p style="font-size: 16px; line-height: 1.5">  \
              As a full-stack blockchain developer, I genuinely enjoy working with <b>U.S. clients</b>. I find that U.S. clients often have a clear vision and high standards, which make collaboration both rewarding and productive. The technological landscape in the U.S. is vibrant and dynamic, and I thrive in environments where innovation and quality are prioritized.  \
            </p>  \
            <p style="font-size: 16px; line-height: 1.5">  \
              Furthermore, my Upwork account was recently <b>permanently blocked</b>, which has limited my ability to connect with clients on this platform. By partnering with a USA-based developer like yourself, I can regain access to the Upwork ecosystem, allowing me to effectively reach out to a diverse range of projects that align with my skills and expertise.  \
            </p>  \
          </td>  \
        </tr>  \
        <tr>  \
          <td>  \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;">  \
              Proposal Overview  \
            </h3>  \
            <p style="font-size: 16px; line-height: 1.5">  \
              I would like to propose the idea of <b>renting your Upwork account</b> for my project engagements, assuming it is currently available. This partnership will allow us to effectively reach and serve clients in the U.S. market with the assurance of quality and reliability that comes with my expertise.  \
            </p>  \
          </td>  \
        </tr>  \
        <tr>  \
          <td>  \
            <h3 style="color: #333; background-color: #f2f2f2; margin: 0; padding: 12px;">  \
              Income Sharing Model  \
            </h3>  \
            <p style="font-size: 16px; line-height: 1.5">  \
              We could structure our collaboration to share any income generated from your Upwork account based on a mutually agreed percentage. This ensures both of us are rewarded fairly for our contributions to the projects.  \
            </p>  \
            <br />  \
            <p style="font-size: 16px; line-height: 1.5">  \
              If this proposal piques your interest, I would be eager to discuss the details further. Below are links to my <b>portfolio</b> and <b>social media profiles</b> for your review:  \
            </p>  \
            <div style="display: flex">  \
              <a href="https://twitter.com/JamesTX0108" style="text-decoration: none; color: #0073e6; padding-right: 20px;">  \
                <img src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png" style="width: 40px; height: 40px" alt="Twitter icon" />  \
              </a>  \
              <a href="https://github.com/montedev0516" style="text-decoration: none; color: #0073e6; padding-right: 20px;">  \
                <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-512.png" style="width: 40px; height: 40px" alt="GitHub icon" />  \
              </a>  \
              <a href="https://james-haruki.vercel.app" style="text-decoration: none; color: #0073e6;">  \
                <img src="https://cdn2.iconfinder.com/data/icons/banking-finance-glyphs-vol-6/52/person__account__avatar__user__profile__global__portfolio-512.png" style="width: 40px; height: 40px" alt="Portfolio icon" />  \
              </a>  \
            </div>  \
          </td>  \
        </tr>  \
        <tr>  \
          <td style="margin-top: 20px">  \
            <p style="font-size: 16px; line-height: 1.5">  \
              Thank you for considering this collaboration. I am looking forward to the potential of working together and am excited about what we can achieve. I hope to hear from you soon!<br />  \
              Best regards,<br />  \
              <b>James Haruki</b>  \
            </p>  \
          </td>  \
        </tr>  \
      </tbody>  \
    </table>  \
  </body>  \
</html>  \
  `;
};

export default template01;
