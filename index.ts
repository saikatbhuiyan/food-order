import express from "express";

const app = express();

app.use("/", (req, res) => {
    return res.json('Hello')
})

app.listen(8080, () => {
  console.log("App listening on port 8080");
});
