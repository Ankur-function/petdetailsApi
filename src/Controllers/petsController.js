const xlsx = require("xlsx")
//const petlistxlsx = require("../Controllers/petlist.xlsx")
const petsModel = require("../Models/petsModel")


const createpet = async function (req, res) {
    try {
const wb = xlsx.readFile('../Controllers/petlist.xlsx')
console.log(wb.SheetNames)

const ws = wb.Sheets('Sheet1')
console.log(ws)

const data = xlsx.utils.sheet_to_json(ws, {raw:false})
console.log(data)

let newData = []
newData = data.map(d =>{
    if(d.paid === 'TRUE')d.paid = true
    if(d.paid === "FALSE")d.paid = false
    return d
})

fs.writeFileSync("./datajson.json",JSON.stringify(newData,null,2))

} catch (error) {
    res.status(500).send(error.message)
    console.log(error.message)

}
}

const getpets = async function (req, res) {
    try {
        const data = req.query


        const pets = await petsModel.find(data).find({deleted: false })
        if (pets.length == 0) return res.status(404).send({ status: false, msg: "No pets Available." })
        res.status(200).send({ status: true, data: pets });
    }


    catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}

const updatepet = async function (req, res) {
    try{

    let petid = req.params.petId
    let check = await petsModel.findById(petid)
    if (!check) return res.send('not valid id')

    let checking = check.deleted
    if (checking == true) return res.status(404).send({ status: false, msg: "pet has been already deleted" })


    let update = await petsModel.findOneAndUpdate({ _id: petid }, { new: true })

    let updateBody = req.body
    let updated = await petsModel.findOneAndUpdate({ _id: petid }, updateBody, { new: true })
    res.status(200).send({ msg: updated });
} catch (error) {
    res.status(500).send({ status: false, msg: error.message });
}
}



module.exports.createpet = createpet
module.exports.getpets = getpets
module.exports.updatepet = updatepet
