const user=require("../model/userSchema")     
const createUser = async(req,res)=>{
    try {
     let {username,password , email}=req.body;
     let result = await user.create({username,password, email})
     res.status(200)
     res.json({
         massage:"data create succsessfully",
         data:result,
     })
     
    } catch (error) {
     console.log(error);
     
    }
 }
 const getAlluser= async(req,res)=>{
    try {
        const result= await user.find()
        res.status(200);
        res.json(result)

    } catch (error) {
        console.log(error);
        
    }
 }
 const getuserId= async(req,res)=>{
    try {
        let id = req.params.id;
        const result = await user.findById(id)
        res.json(result)
        // console.log(Id);
    } catch (error) {
        console.log(error);
        
    }
 }

module.exports={
    createUser,
    getAlluser ,
    getuserId
    
}