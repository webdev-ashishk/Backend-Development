const expres = require("express");
const app = expres();
const PORT = 5000;
const mongoose = require("mongoose");
const friendModel = require("./model/user.model");
app.get("/home", (req, res) => {
  res.send("<h1>Hello World</h1>");
});
//db connections
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mongoosedb");
  console.log("database connected");
}
// friend models (database created by mongoose)
let fr = new friendModel({
  name: "depeeka",
  branch: "ELECTRICIAN",
  email: "deepika@gmail.com",
  phone: "0987654321",
});

fr.save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log("listeing on port http://localhost:" + PORT);
});
