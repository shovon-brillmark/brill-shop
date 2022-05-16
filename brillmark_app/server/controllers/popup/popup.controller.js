/**
 * Popup Controller---------------------------
 */

 import Popup from '../../models/popup.model.js';

 const getPopup = (req, res, next) => {
    return res.status(200).json({
        msg: "Hello From API"
    });
 }

 const addPopup = (req, res, next) => {

    const newPopup = new Popup({
        title: req.body.title,
        description: req.body.description,
    });

    newPopup.save().then( result => {

        if(!result){
            return res.status(201).json({
                error: true,
                msg: "Already Exists"
            });
        }
        return res.status(201).json({
            data: result,
            msg: "Successfully Added",
            error:false
        })

    }).catch( error => {
        return res.status(200).json({
            error: true,
            msg: error
        });
    });

 }

 const updatePopup = (req, res, next) => {

     const popupId = req.popupData.popupId;

     const newPopup = new Popup({
        title: req.body.title,
        description: req.body.description,
    });
     
     Popup.updateOne({ _id: popupId }, newPopup).then(result => {
         if (result.n > 0) {
            res.status(201).json({
            data: result,
            error: false,
            msg: 'Successfully Updated Popup'
        });
             
         } else {
            res.status(201).json({
            error: true,
            msg: 'Problem in Updating popup'
        });
         }
        
    }).catch( error => {
        res.status(201).json({
            error: true,
            msg: error
        });
    });
 }

 export default { getPopup, addPopup, updatePopup };