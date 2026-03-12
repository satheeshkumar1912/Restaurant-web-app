import dbConnect from "../../../lib/db"
import Menu from "../../../models/Menu"

export default async function handler(req,res){

await dbConnect()

const { id } = req.query

if(req.method === "DELETE"){

try{

await Menu.findByIdAndDelete(id)

return res.status(200).json({
message:"Menu item deleted"
})

}catch(error){

return res.status(500).json({
error:"Delete failed"
})

}

}

}