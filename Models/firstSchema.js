import mongoose from "mongoose";

const firstSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: {
        type: Number, required: true,
        min: 18, max: 50
    },

    feeS: {
        type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50
    },
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }

})


// Here You use the word members which createcollection with the name of Members//
 
const firstSchemaSend = mongoose.model('Members', firstSchema)



// Get Data Function ///



// Reterive a Document
// const getData = async () =>{
//     const result = await firstSchemaSend.find()
    // console.log(result)
// }
// const getData = async () =>{
//     const result = await firstSchemaSend.find()
//     console.log(result)
//     result.forEach((data)=>{console.log(data.name)})
// }


// Reterive all Document with al fields

// const getData = async () =>{
    // Include Way
    // const result = await firstSchemaSend.find().select('name age')
    // const result = await firstSchemaSend.find().select(['name' , 'age'])
    // const result = await firstSchemaSend.find().select({hobbies : 1 , isActive : 1})
    // const result = await firstSchemaSend.find({},'name')
    // Exclude Way 
// const result = await firstSchemaSend.find().select('-name -age')
    // const result = await firstSchemaSend.find().select(['-name' , '-age'])
    // const result = await firstSchemaSend.find().select({hobbies : 0 , isActive : 0})


    // console.log(result)
    // result.forEach((data)=>{console.log(data.name)}) 
// }


// Reterive Single Documet //

// const getData = async()=>{
    //     const result = await firstSchemaSend.findById("63912a3586d49f1d25eebb3f")
    //         console.log(result)
    // }


    // Reterive Single Documet  With Specific Field /  /
//     const getData = async()=>{
//     const result = await firstSchemaSend.findById("63912a3586d49f1d25eebb3f" , "name age hobbies")
//         console.log(result)
// }

// Reterive Document by Specific Field
//     const getData = async()=>{
//     const result = await firstSchemaSend.find({name  : 'MuhammadHassan'})
//         console.log(result)
// }
// Reterive Document by Field with Specific Field
//     const getData = async()=>{
    //     const result = await firstSchemaSend.find({name  : 'MuhammadHassan'}).select( 'age' )
    //         console.log(result)
    // }
    
    // Reterive Limited Document
//     const getData = async()=>{
//     // const result = await firstSchemaSend.find().limit(1)
//     const result = await firstSchemaSend.find({},null,{limit : 1})
//         console.log(result)
// }


// Skip the Retrive Document
//     const getData = async()=>{
//     const result = await firstSchemaSend.find().skip(1)
//     // const result = await firstSchemaSend.find({},null,{skip : 1})
//         console.log(result)
// }

// Count Document
//     const getData = async()=>{
//     const result = await firstSchemaSend.find().countDocuments()
//         console.log(result)
// }

// Sort Doocuments
    // const getData = async()=>{
    //     // Decending Order 
    // // const result = await firstSchemaSend.find().sort({name : 1})
    // // Accending Order 
    // const result = await firstSchemaSend.find().sort({name : -1})
    // console.log(result)
// }



// Mix Reterive Document

//     const getData = async()=>{
//     // const result = await firstSchemaSend.find({}, {name : 1 , age : 1} , {limit : 3, skip : 1})
//     const result = await firstSchemaSend.find({}, {name : 1 }).limit(2).sort({name : -1})

//     console.log(result)
// }




// Comparision and  Query Operater //

//     const getData = async()=>{
//     // const result = await firstSchemaSend.find({age :{$gt : 12}})
//     // const result = await firstSchemaSend.find({age :{$gte : 12}})
//     // const result = await firstSchemaSend.find({age :{$lt : 2}})
//     // const result = await firstSchemaSend.find({age :{$lte : 2}})
//     // ne Mean Not Equal 
//     // const result = await firstSchemaSend.find({age :{$ne : 18}})
//     // The Value give  in Array it find in wole Document 
//     // const result = await firstSchemaSend.find({age:{$in :[32,18] } })
//     // The Value give  in Array it find not exist  in wole Document 
//     // const result = await firstSchemaSend.find({age:{$nin :[32,18] } })
//     // console.log(result)
// }


// Logical Operater 

    // const getData = async()=>{
        
            // const result = await firstSchemaSend.find({$and : [{age:{$gte:32 }} , {name:"Ahmed Raza"}]})
            // const result = await firstSchemaSend.find({$or : [{age:{$gte:32 }} , {name:"Muhammad Saad"}]})
            // const result = await firstSchemaSend.find( {age:{ $not : {$gt : 32} }})
// console.log(result)        
// }




export {getData}

// export default familyMembers;




// If we want to about something than we use 

// console.log(firstSchema.path('age'))


// Compiling Schema 

