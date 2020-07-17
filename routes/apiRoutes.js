const apiRoutes = require('express').Router();
const mailer = require('../nodeMailer/nodeMailer');

// Send email
apiRoutes.post('/send', (req, res) => {
  const sendParams = {
    to: 'benjamin.candy@icloud.com',
    subject: 'Email from Node',
    html: `<h2 style={{text-align:"center"}}>!!Email from Portfolio!!</h2>
          <h4>Name: ${req.body.name}</h4>
          <h4>Email: ${req.body.email}</h4>
          
          <p>${req.body.message}</p>`,
  };

  mailer.sendMail(sendParams)
    .then(() => res.sendFile('contact'))
    .catch(err => (res.send('error')));
});

module.exports = apiRoutes;
