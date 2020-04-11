const router = require("express").Router();
const db = require("../db/db.json");
const fs = require('fs');
const store = require("../js/store");
const path = require('path');

// get a note
router.get("/notes", function(request, response) {
  
  response.send(db);
});

 // post a note
 router.post("/notes", function(req, res) {
   db.push(store(req.body));
   res.json(true);
   const data = JSON.stringify(db);
   writeDb();
 })
 //
 router.delete("/notes/:id", function(req, res) {
 db = db.filter(elem => elem.id != req.params.id);
 res.json(true);
 writeDb();
 })

 function writeDb() {
 const data = JSON.stringify(db,null,"\t")
 fs.writeFile(path.join(__dirname, "../db/db.json"), data, err => {if (err) throw err});
 }
 module.exports = router;