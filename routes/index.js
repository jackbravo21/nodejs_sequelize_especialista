const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({Message:"Você está na home!"});
});

module.exports = router;



