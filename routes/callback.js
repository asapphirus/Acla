const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Callback");
});

module.exports = router;