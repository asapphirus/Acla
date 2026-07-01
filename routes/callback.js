const router = require("express").Router();

router.get("/", async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.send("No Code.");
    }

    console.log("Authorization Code:", code);

    res.send("Code received successfully!");
});

module.exports = router;