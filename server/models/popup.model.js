import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PopupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Popup = mongoose.model("Popup", PopupSchema);
export default Popup;
