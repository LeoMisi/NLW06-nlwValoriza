import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Primeira rota Get");
});

app.post("/test-post", (req, res) => {
  return res.send("Primera rota Post");
});

app.listen(3000, () => console.log("Server is Running"));
