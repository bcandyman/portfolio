const dotenv = require('dotenv');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

dotenv.config();
const mailer = {};

const authorize = () => {
  const { OAuth2 } = google.auth;
  const myOAuth2Client = new OAuth2(
    process.env.GmailClientID,
    process.env.GmailClientSecret,
    'https://developers.google.com/oauthplayground',
  );

  myOAuth2Client.setCredentials({
    refresh_token: process.env.GmailRefreshToken,
  });

  const myAccessToken = myOAuth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'benjamincandyportfolio@gmail.com',
      clientId: process.env.GmailClientID,
      clientSecret: process.env.GmailClientSecret,
      refreshToken: process.env.GmailRefreshToken,
      accessToken: myAccessToken,
      expires: 12345,
    },
  });
  return transport;
};


mailer.sendMail = (mailParameters) => new Promise((resolve, reject) => {
  if (mailParameters.to === null) return;
  if (mailParameters.subject === null) return;
  if (mailParameters.html === null) return;

  const transport = authorize();

  transport.sendMail(mailParameters, (err, result) => {
    if (err) {
      reject(err);
    } else {
      transport.close();
      resolve(result);
    }
  });
});

module.exports = mailer;
