const { Router } = require("express");
const router = Router();


module.exports = () => {
    router.get("/", async (req, res) => {
        res.json({
            status: "success",
            data: {
                message: "Kado was here"
            }
        })
    });

    return router;
}