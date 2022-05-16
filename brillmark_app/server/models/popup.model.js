import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PopupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
});

const Popup = mongoose.model('Popup', PopupSchema);
export default Popup;