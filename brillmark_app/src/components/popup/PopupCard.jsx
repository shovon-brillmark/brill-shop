import {
    Card,
    TextContainer,
} from "@shopify/polaris";

import { useCallback } from "react";
import { PopupForm } from "./popup-form/PopupForm";

export const PopupCard = () => {

    const handleSubmit = useCallback((_event) => {
        setTitle('');
        setDescription('');
    }, []);

    return (
        <>
            {toastMarkup}
            <Card title="Popup Information" sectioned>
                <TextContainer spacing="loose">
                    <p>
                        Modify popup information for storefront here.
                    </p>
                    <PopupForm onSubmit={handleSubmit} />
                </TextContainer>
            </Card>
        </>
    );
}
