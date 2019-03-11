const express = require("express");
const app = express();
//route handler,watching for http request, / the route
app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
