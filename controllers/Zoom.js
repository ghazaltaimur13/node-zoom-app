
const config = require('../config.js');

module.exports = {
  getAlert: async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', config.allowedUrl);
    const { alertMessage } = req.body;
    console.log(alertMessage);
    if (!alertMessage) {
      return res.status(400).send(
        'Request missing alert Message param'
      );
    }
        
    try {
      
      res.status(200).json({
        success: true,
        message: 'Alert',
        data: alertMessage+" is Clicked"
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send('invalid username or password');
    }    
  }
}