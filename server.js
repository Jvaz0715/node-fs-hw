const http = require("http");
const fs = require("fs");

// make sure the package.json main is server.js CHECK


http
  .createServer(function (req, res) {
    if (req.url === "/create-directory") {
      fs.mkdir(__dirname, "content", function (err, data) {
        if (err) {
          res.end(err);
        } else {
          console.log("content folder created'")
          return res.end();
        }
      });
    };

    if (req.url === "/create-text") {
      fs.writeFileSync("randomText.txt", "This is a string of data for randomTEXT", function (err, data) {
        if (err) {
          res.end(err);
        } else {
          console.log("randomText.txt created")
          return res.end();
        }
      });
    }

    if (req.url === "/new-folder-and-file") {
      fs.writeFileSync("verbage.txt", "randomText.txt", function (err, data) {
        if (err) {
          res.end(err);
        } else {
          console.log("verbage.txt created")
          return res.end();
        }
      });
    }
  })
  // create and listen to server 3000
  .listen(3000, function () {
    console.log("Server has been started");
  });


  setTimeout(function(){
    fs.rmdir("content", () => {
      console.log("Content Deleted");
    });   
  }, 7000);