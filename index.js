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

app.get("/privacy", (req, res) => {
    res.send(`
        <h1>Privacy Policy</h1>
        <p>This application is used only for authentication in a private Roblox experience. No personal information is sold or shared with third parties.</p>
    `);
});

app.get("/terms", (req, res) => {
    res.send(`
        <h1>Terms of Service</h1>
        <p>This application is intended for use only with its associated Roblox experience. Use of this authentication service is voluntary.</p>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server in PORT: ${PORT}`);
});