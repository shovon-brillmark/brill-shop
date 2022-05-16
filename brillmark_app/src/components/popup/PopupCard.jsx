import {
    Card
} from "@shopify/polaris";

import { useState } from "react";
import { PopupForm } from "./popup-form/PopupForm";

import { addPopup } from '../../actions/popup';

export const PopupCard = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = ({ title, description }) => {
        setSubmitting(true);
        console.log('Title : ', title);
        console.log('Description : ', description);

        addPopup({ title, description });
        console.log('Done');
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

    return (
        <>
            <Card title="Popup Information">
                <Card.Section>
                    <p>Modify popup information for storefront here.</p>
                </Card.Section>

                <Card.Section>
                    <PopupForm onSubmit={handleSubmit} onSubmitLoader={submitting} />
                </Card.Section>
            </Card>
        </>
    );
}
