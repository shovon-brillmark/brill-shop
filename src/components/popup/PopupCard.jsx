import {
    Card,
    Button
} from "@shopify/polaris";

import { useState, useEffect, useCallback } from "react";
import { PopupForm } from "./popup-form/PopupForm";
import { Toast, useAppBridge } from "@shopify/app-bridge-react";
import { addPopup } from '../../actions/popup';

import { useDispatch, useSelector } from "react-redux";
import { getPopupByID, updatePopupByID } from "../../store/popup.action";

export const PopupCard = () => {
    const [toast, setToast] = useState(false);

  const toastMarkup = toast ? (
    <Toast content="Updated Successfull" onDismiss={() => setToast(false)} />
  ) : null;
    const [submitting, setSubmitting] = useState(false);

    const popupID = '627e243a77f915c6c90748a0';

    const isUpdating = useSelector(state => state.popupReducer.updatePending)

    const dispatch = useDispatch();

    const handleSubmit = async ({ title, description }) => {
        setSubmitting(true);
        console.log('Title : ', title);
        console.log('Description : ', description);
        
        //addPopup({ title, description });
        dispatch(updatePopupByID(popupID, title, description));
        console.log('Done');
        console.log(isUpdating);

        await setSubmitting(false);
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
    };

    useEffect(() => {
       dispatch(getPopupByID(popupID)); 
    }, [dispatch]);

    const popup = useSelector(state => state.popupReducer?.popup?.data);

    return (
        <>
            <Card title="Popup Information">
                <Card.Section>
                    <p>Modify popup information for storefront here.</p>
                </Card.Section>

                { popup && 
                    <Card.Section>
                        {toastMarkup}
                        <PopupForm onSubmit={handleSubmit} onSubmitLoader={submitting} item={popup} />
                    </Card.Section>
                }
            </Card>
        </>
    );
}
