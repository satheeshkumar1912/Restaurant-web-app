import dbConnect from "../../../lib/db";
import OpeningHours from "../../../models/OpeningHours";

export default async function handler(req,res){

 await dbConnect();

 if(req.method === "GET"){

  const hours = await OpeningHours.findOne();
  res.status(200).json(hours);

 }

 if(req.method === "POST"){

  const {open, close} = req.body;

  let hours = await OpeningHours.findOne();

  if(hours){
    hours.open = open;
    hours.close = close;
    await hours.save();
  }else{
    hours = await OpeningHours.create({open, close});
  }

  res.status(200).json(hours);

 }

}