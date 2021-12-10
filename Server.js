const express = require("express");
const app = express();
app.use(express.json());
app.use(
  (addActiveTime = (req, res, next) => {
    let reqAt = new Date().getHours();
    let day = new Date().getDay();
    if (reqAt < 9 || reqAt > 17 || day == 0 || day == 6) {
      res.sendFile(__dirname + "/all/closed.html");
    } else {
      next();
    }
  })
);

app.use(express.static("all"));

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.log("Server is not running");
  else console.log(`Server is running on port ${port}...`);
});
