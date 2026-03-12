import dbConnect from "../../../lib/db"
import Menu from "../../../models/Menu"

export default async function handler(req,res){

await dbConnect()

if(req.method === "GET"){

const menu = await Menu.find()

res.status(200).json(menu)

}

if(req.method === "POST"){

const item = await Menu.create(req.body)

res.status(200).json(item)

}

}