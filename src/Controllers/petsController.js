const xlsx = require("node-xlsx")
const petsModel = require("../Models/petsModel")


const createpet = async function (req, res) {
try{
    const workSheetsFromFile = xlsx.parse(`${__dirname}/petlist1.xlsx`);
   
   const columns = workSheetsFromFile[0].data.shift()
   const rows = workSheetsFromFile[0].data

var result = rows.map(function(row) {
  return row.reduce(function(result, field, index) {
    result[columns[index]] = field;
    return result;
  }, {});
});

for(i=0;i<result.length;i++){
  
   let Name = result[i].name
   let Type = result[i].type
   let Breed = result[i].breed
   let Age = result[i].age

   let petCreated = await petsModel.create({Name,Type,Breed,Age})
   console.log(petCreated)
}
let a = await petsModel.find({isDeleted:false})
res.status(201).send({ data: "Your data has been stored successfully" })
 
} catch (error) {
    res.status(500).send(error.message)
    console.log(error.message)

}
}

const getpets = async function (req, res) {
    try {
        const data = req.query

        const pets = await petsModel.find(data).find({isDeleted: false })
        if (pets.length == 0) return res.status(404).send({ status: false, msg: "No pets Available." })
        res.status(200).send({ status: true, data: pets });
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}


const getspecificpets = async function (req, res) {
    try {

        const pets = await petsModel.findOne({_id:req.params.petId,isDeleted:false})
        if (!pets) return res.send("This pet is not avaliable")
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
    let data = req.body
    let check = await petsModel.findById(petid)
    if (!check) return res.send('not valid id')

    let checking = check.isDeleted
    if (checking == true) return res.status(404).send({ status: false, msg: "pet has been already deleted" })


    let update = await petsModel.findOneAndUpdate({ _id: petid }, data,{ new: true })

    res.status(200).send({ msg: update });
} catch (error) {
    res.status(500).send({ status: false, msg: error.message });
}
}


const deletepet = async function (req, res) {

    try {
        let petid = req.params.petId

        let check = await petsModel.findOne({ _id: petid })
        if (!check) return res.status(404).send('pet does not exist')

        let checking = check.isDeleted
        if (checking == false) {

            let deletepet = await petsModel.findOneAndUpdate({ _id: petid }, { isDeleted: true, deletedAt: new Date() }, { new: true })
            return res.status(200).send("pet has been removed successfully")
        } else {
            res.status(404).send('this pet is already deleted')
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
}



module.exports.createpet = createpet
module.exports.getpets = getpets
module.exports.updatepet = updatepet
module.exports.deletepet = deletepet
module.exports.getspecificpets = getspecificpets
