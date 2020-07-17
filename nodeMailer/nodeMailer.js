const dotenv = require('dotenv');
const { google } = require("googleapis");
const nodemailer = require('nodemailer');
const mailer = {};

dotenv.config();

const authorize = () => {

  const OAuth2 = google.auth.OAuth2;

  const myOAuth2Client = new OAuth2(
    process.env.GmailClientID,
    process.env.GmailClientSecret,
    "https://developers.google.com/oauthplayground"
  );

  myOAuth2Client.setCredentials({
    refresh_token: process.env.GmailRefreshToken
  });

  const myAccessToken = myOAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "benjamincandyportfolio@gmail.com",
      clientId: process.env.GmailClientID,
      clientSecret: process.env.GmailClientSecret,
      refreshToken: process.env.GmailRefreshToken,
      accessToken: myAccessToken,
      expires: 12345
    }
  });

  return transport;
}


mailer.sendMail = (mailParameters) => {

  return new Promise((resolve, reject) => {

    if (mailParameters.to === null) return;
    if (mailParameters.subject === null) return;
    if (mailParameters.html === null) return;

    const transport = authorize()

    transport.sendMail(mailParameters, function(err, result) {
      if (err) {
        reject(err)
      } else {
        transport.close();
        resolve('Email has been sent: check your inbox!')
      }
    });
  })
};

module.exports = mailer;