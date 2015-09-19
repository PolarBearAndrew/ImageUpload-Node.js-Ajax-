var express = require("express");
var router = express.Router();
var multer = require('multer');


//- set multer
router.use(multer({
    dest: './uploads/',
    rename: function(fieldname, filename) {
        return filename + Date.now();
    },
    onFileUploadStart: function(file) {
        console.log(file.originalname + ' tis starting ...')
    },
    onFileUploadComplete: function(file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
        done = true;
    }
}));

router.post('/new', function(req, res) {
    if (done == true) {
        console.log(req.files);
        //res.status(204);
        res.json({
            status: "File uploaded."
        });
    }
});

module.exports = router;
