const express = require("express");

const loginRoute = require("./routes/login");
const callbackRoute = require("./routes/callback");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server online!");
});

app.use("/login", loginRoute);
app.use("/callback", callbackRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server in PORT: ${PORT}`);
});