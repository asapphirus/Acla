const express = require("express");

const loginRoute = require("./routes/login");
const callbackRoute = require("./routes/callback");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor online!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado!");
});

app.use("/login", loginRoute);
app.use("/callback", callbackRoute);