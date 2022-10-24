const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;

const courses = require("./courses.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
