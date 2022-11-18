const { Router } = require("express");
const router = Router();
const data = require("../data/cardInfo.json");

module.exports = () => {
    router.get("/", async (req, res) => {
        res.status(200).json({
            status: "success",
            data: data.cc
        })
    });
    return router;
}