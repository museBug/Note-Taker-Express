let path = require("path");
let router = require("express").Router();

  // HTML GET Requests
  // Below code handles when users "visit" a page.
router.get("/notes", function(request, response) {
    
     response.sendFile(path.join(__dirname,'../public/notes.html'))
});

module.exports = router;


