const dbConfig = require("../Config/db.config.js")

const mongoose = require("mongoose")

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url

db.maintenance = require("./maintenance.model")(mongoose)
db.spare = require("./spare.model")(mongoose)

module.exports = db