import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  guests: Number
},{timestamps:true});

export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);