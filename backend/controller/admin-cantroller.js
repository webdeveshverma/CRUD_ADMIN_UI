
import Admin from "../model/admin.js";

// router.post("/login",async(req,res)=>{
//     try {
//       const admin= await Admin.findOne({email:req.body.email , password:req.body.password}).lean().exec();
//     //    console.log("user record" , admin)
//        return admin?res.status(200).send({message:"Logged in !!" ,email:admin.email,_id:admin._id}):res.status(400).send({message:"Please try another email or password" })
//     } catch (error) {
//        return res.status(400).send({message:error.message})
//     }
// })



export const addAdmin=async(req,res)=>{
   const admin=req.body;
   const newAdmin=new Admin(admin);

   try{
    await newAdmin.save();
    return res.status(201).json(newAdmin);
   }
   catch(error){
    return res.status(409).json({message:error.message})
   }
}

export const loginAdmin=async(req,res)=>{
    
    try {
        const admin= await Admin.findOne({email:req.body.email , password:req.body.password}).lean().exec();
      //    console.log("user record" , admin)
         return admin?res.status(200).send({message:"Logged in !!" ,email:admin.email,_id:admin._id}):res.status(400).send({message:"Please try another email or password" })
      } catch (error) {
         return res.status(400).send({message:error.message})
      }
}