const defaultTemplate = (username, heading ) => {
  return `<html> \
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
                            <h1 style="color: #2c2c2c; margin-left: 20px;">${heading}</h1> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                Dear <b>${username}</b>, <br> \
                                I hope you are doing well.<br> \
                                My name is <b>James Haruki</b>, and I am a <b>full-stack blockchain developer</b> based in Japan. I am reaching out to explore a potential <b>long-term collaboration</b> that I believe could be <b>mutually beneficial.</b> \
                            </p> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <h3 style="color: #333; background-color: #F2F2F2; margin: 0; padding: 12px;">Why I’m Interested in Your Upwork Account</h3> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                &nbsp;&nbsp;Due to the recent permanent blocking of my <b>Upwork account,</b> I am seeking to partner with established developers in the <b>U.S.</b> The <b>Upwork platform</b> is highly competitive, and having a U.S.-based account will allow me to access a wider range of <b>projects</b> and <b>clients,</b> fostering greater <b>trust</b> and <b>communication</b> in my freelance work. \
                            </p> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <h3 style="color: #333; background-color: #F2F2F2; margin: 0; padding: 12px;">Advantages of Our Collaboration</h3> \
                            <ul style="line-height: 1.5; font-size: 16px;"> \
                                <li><b>Access to the U.S. Market:</b> Partnering with you will enable me to engage with <b>innovative projects</b> and a broader range of <b>clients</b>.</li> \
                                <li><b>Enhanced Client Trust:</b> Collaborating with a <b>U.S.-based partner</b> fosters greater <b>trust</b> and facilitates effective communication with <b>clients</b>.</li> \
                                <li><b>Mutual Growth:</b> This partnership offers a unique opportunity for you to expand your <b>project scope</b> without significant <b>risk</b>.</li> \
                            </ul> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <h3 style="color: #333; background-color: #F2F2F2; margin: 0; padding: 12px;">Proposed Structure</h3> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                &nbsp;&nbsp;If you’re not currently using your <b>Upwork</b> account, I propose we utilize it to manage our <b>freelance work</b>. We can establish a transparent <b>revenue-sharing agreement</b> for any <b>income</b> generated from our joint <b>projects</b>. \
                            </p> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                I would appreciate the opportunity to discuss this <b>proposal</b> in detail and explore how we can <b>collaborate</b> effectively. For your reference, I have included links to my <b>portfolio</b> and <b>social media profiles</b> below: \
                            </p> \
                            <div style="display: flex;"> \
                                <a href="https://twitter.com/JamesTX0108" style="text-decoration: none; color: #0073e6; padding-right: 20px;">  \
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
                        <td style="margin-top: 20px;"> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                Thank you for considering this <b>collaboration</b>. I look forward to your <b>response</b>. <br> \
                                Best regards,<br> \
                                <b>James Haruki</b> \
                            </p> \
                        </td> \
                    </tr> \
                </tbody> \
            </table> \
        </body> \
    </html>`;
};

export default defaultTemplate;
