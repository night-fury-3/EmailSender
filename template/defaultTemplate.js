const defaultTemplate = (username, heading) => {
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
                                &nbsp;&nbsp;I am particularly interested in collaborating with a <b>USA developer</b> like yourself because I enjoy working alongside U.S. professionals and find it rewarding to engage with <b>U.S. clients.</b> Due to the recent permanent blocking of my <b>Upwork account,</b> I see this partnership as an opportunity to access the <b>Upwork platform,</b> which is highly competitive. Having a U.S.-based account will help me connect more effectively with a wider range of <b>projects</b> and <b>clients</b> while fostering greater <b>trust</b> and <b>communication</b> in our freelance work. \
                            </p> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <h3 style="color: #333; background-color: #F2F2F2; margin: 0; padding: 12px;">Proposal Overview</h3> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                &nbsp;&nbsp;I am interested in <b>renting</b> your <b>Upwork account,</b> provided you are not currently using it. This arrangement would enable me to leverage your account to tap into the <b>U.S. market</b> effectively. \
                            </p> \
                        </td> \
                    </tr> \
                    <tr> \
                        <td> \
                            <h3 style="color: #333; background-color: #F2F2F2; margin: 0; padding: 12px;">Income Sharing</h3> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                &nbsp;&nbsp;I propose that we share the <b>income</b> generated from any projects secured through your Upwork account on a mutually agreed basis. \
                            </p> \
                            <br> \
                            <p style="font-size: 16px; line-height: 1.5;"> \
                                &nbsp;&nbsp;I believe this partnership could enhance our opportunities and foster <b>mutual growth.</b> If you're open to discussing this further, I would appreciate the chance to connect. For your reference, I have included links to my <b>portfolio</b> and <b>social media profiles</b> below: \
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
