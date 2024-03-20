module.exports = (app) => {
    const spare = require("../Controllers/spare.controller")
    var router = require("express").Router()


    router.post("/createSpare",spare.create)
    router.get("/allSpare",spare.findAll)
    router.get("sparebyid/:id",spare.maintainById)
    router.put("/updateSpare/:id",spare.update)
    router.put("/deleteSpare/:id",spare.DeleteMaintainFromId)

    app.use("/api/spare",router)
}