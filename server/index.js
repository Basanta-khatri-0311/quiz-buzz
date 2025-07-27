import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is up and running");
});




app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
