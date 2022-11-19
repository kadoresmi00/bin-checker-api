const express = require("express");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");
const app = express();
const version = require("./config").version;
const rateLimit = require("express-rate-limit");
app.use(cors());
app.use(json());
app.use(urlencoded({ limit: "50mb", extended: false }));

const globalRateLimit = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        message: "Rate limit! 15m limit 100 requests",
        legacyHeaders: false,
})


app.use("/", globalRateLimit, require("./src/router/main")());

app.use("/" + version + "/all", globalRateLimit, require("./src/router/all")());
app.use("/" + version + "/bin", globalRateLimit, require("./src/router/search")());
app.use("/" + version + "/network", globalRateLimit, require("./src/router/network")());




let listener = app.listen(3000, () => {
        console.log(`[Kado] => Api is running on port ${listener.address().port}\n[Version] => ${version}`);
});

