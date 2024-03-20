const db = require("../Models")
const Spare = db.spare

exports.create = (req, res) => {
    const spare = new Spare({
        itemId: req.body.itemId,
        itemName: req.body.itemName,
        stockCount: req.body.stockCount
    })
    spare
        .save(spare)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=> {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.findAll = (req,res) => {
    Spare.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving spare parts records."
            })
        })
}

exports.maintainById = (req,res) => {
    const id = req.params.id

    Spare.find({_id: id })
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving spare parts records."
            })
        })
}

exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({
           message: "Data to update can not be empty!" 
        });
    }
    const id = req.params.id

    Spare.findOneAndUpdate({_id: id}, {$set:req.body })
    .then(data => {

    if(data) {
        res.send(true);

    }else
    res.status(404).send({
        message: `Cannot update spare parts with id=${id}`,
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: `Error updating spare parts with id=${id}`
         });
    });
}

exports.DeleteMaintainFromId = (req, res) => {
    const Id = req.params.id

    Spare.findByIdAndUpdate({ _id: Id }, { $set: { maintenanceStatus: false } })
        .then(data => {

            if (data) {
                res.send(true)

            } else res.status(404).send({
                message: `Cannot delete maintenance with id=${Id}. Maybe maintenance was not found!`
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err
            })
        })
}

