import mongoose from "mongoose";

const OpeningHoursSchema = new mongoose.Schema({
  open: String,
  close: String
});

export default mongoose.models.OpeningHours ||
mongoose.model("OpeningHours", OpeningHoursSchema);