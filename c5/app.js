const express = require("express");
const app = express();
const PORT = 5000;
const mainRouter = require("./Router/routes");

app.use("/wow", mainRouter);

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
