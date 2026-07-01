const { v4: uuid } = require("uuid");
const { generatePKCE } = require("../utils/pkce");
const sessions = require("../sessions");

async function createSession(discordId) {

    const pkce = await generatePKCE();

    const state = uuid();

    const nonce = uuid();

    sessions.set(state, {
        discordId,
        verifier: pkce.code_verifier,
        challenge: pkce.code_challenge,
        nonce,
        createdAt: Date.now()
    });

    return {
        state,
        nonce,
        challenge: pkce.code_challenge
    };

}

module.exports = {
    createSession
};