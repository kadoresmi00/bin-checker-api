const { Router } = require("express");
const router = Router();
const data = require("../data/cardInfo.json");

module.exports = () => {
    router.get("/:id", async (req, res) => {
        if (!req.params.id) return res.status(400).json({ status: "error", message: "Missing id" });
        if (isNaN(req.params.id)) return res.status(400).json({ status: "error", message: "Invalid id" });
        if (req.params.id.length !== 6) return res.status(400).json({ status: "error", message: "Invalid id" });
        let bin = data.cc.find(bin => bin.bin.toString() === req.params.id);
        if (!bin) return res.status(404).json({ status: "error", message: "Bin not found" });
        res.status(200).json({
            status: "success",
            data: {
                bank: bin.bankName,
                network: bin.network,
            }
        })
    });
    return router;
}