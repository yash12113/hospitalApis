const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    return res.status(200).json( {
        data:"Manjeet",
        message: 'Please request the correct routes! Check "https://github.com/Manjeetk1248/hospital-api/README.md" for documentation.'
    }
)});

router.use('/doctors', require('./doctor')); //routes to all doctors reuqest
router.use('/patients', require('./patient')); //routes to all pateints request
router.use('/reports', require('./report')); //routes to all reports request

module.exports = router;