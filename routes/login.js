const router = require("express").Router();

const { createSession } = require("../services/oauth");
const config = require("../config");
const tokens = require("../stores/tokens");

router.get("/", async (req, res) => {

    const { token } = req.query;

    if (!token) {
        return res.status(400).send("Missing token.");
    }

    const sessionData = tokens.get(token);

    if (!sessionData) {
        return res.status(401).send("Invalid or expired token.");
    }

    const { discordId } = sessionData;

    const session = await createSession(discordId);

    const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        response_type: "code",
        scope: config.scopes.join(" "),
        state: session.state,
        nonce: session.nonce,
        code_challenge: session.challenge,
        code_challenge_method: "S256"
    });

    res.redirect(
        `https://apis.roblox.com/oauth/v1/authorize?${params.toString()}`
    );

    tokens.delete(token);
});

module.exports = router;