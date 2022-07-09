const mongoose = require("mongoose")
const petSchema = new mongoose.Schema({

    Name:{
        type: String,
        required:true,
        trim:true
    },
    Type:{
        type: String,
        required:true,
        trim:true
    },
    Breed:{
        type: String,
        required:true,
        trim:true
    },
    Age:{
        type: Number,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    DeletedAt:{ 
        type: Date,
        default: null
    }

}, { timestamps: true })

module.exports = mongoose.model("pet", petSchema)

