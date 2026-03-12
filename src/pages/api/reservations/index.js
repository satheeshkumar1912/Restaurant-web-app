import dbConnect from "../../../lib/db"
import Reservation from "../../../models/Reservation"

export default async function handler(req,res){

await dbConnect()

// RESTAURANT CAPACITY
const MAX_SEATS = 50

if(req.method === "POST"){

try{

const {name,date,time,guests} = req.body

// find existing reservations for same slot
const reservations = await Reservation.find({
date,
time
})

// calculate booked seats
const totalBooked = reservations.reduce(
(sum,r)=> sum + Number(r.guests),0
)

const requestedSeats = Number(guests)

// check capacity
if(totalBooked + requestedSeats > MAX_SEATS){

return res.status(400).json({
message:"No seats available for this time slot"
})

}

// create reservation
const newReservation = await Reservation.create({
name,
date,
time,
guests
})

return res.status(201).json(newReservation)

}catch(error){

return res.status(500).json({
error:"Reservation failed"
})

}

}

if(req.method === "GET"){

const reservations = await Reservation.find()

return res.status(200).json(reservations)

}

}