const pkceChallenge = require("pkce-challenge");

async function generatePKCE() {
    return await pkceChallenge();
}

module.exports = {
    generatePKCE
};