var Zoom = require('../controllers/Zoom');

module.exports = function (app) {
    app.post('/api/getAlert', Zoom.getAlert);
}