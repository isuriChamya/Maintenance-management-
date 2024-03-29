module.exports = (mongoose)=>{
    const dbLink = require("../Config/db.config")
    var schema = mongoose.Schema({
        itemId : Number,
        itemName : String,
        stockCount : Number
    })

    schema.method("toJSON", function() {
        const{_id, ...object}= this.toObject()
        object.id= _id
        return object;
    })

    const Spare = mongoose.model("Spare", schema, "Spare")
    return Spare
}