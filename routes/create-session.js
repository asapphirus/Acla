const router = require("express").Router();
const { v4: uuid } = require("uuid");

const tokens = require("../stores/tokens");

router.post("/", (req, res) => {
    const { discordId } = req.body;

    if (!discordId) {
        return res.status(400).json({ error: "Missing discordId" });
    }

    const token = uuid();

    tokens.set(token, {
        discordId,
        createdAt: Date.now()
    });

    return res.json({
        url: `https://acla-backend.onrender.com/login?token=${token}`
    });
});

module.exports = router;