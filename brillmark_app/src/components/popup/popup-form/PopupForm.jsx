import { useState } from "react";

import {
    Form,
    FormLayout,
    TextField,
    Button
} from "@shopify/polaris";

export const PopupForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { onSubmit } = props;

    return (
        <>
            <Form onSubmit={onSubmit}>
                <FormLayout>
                    <TextField
                        value={title}
                        label="Title"
                        type="text"
                        autoComplete="text"
                        helpText={
                            <span>
                                This will show on the title bar of the popup on top.
                            </span>
                        }
                    />
                </FormLayout>
            </Form>
        </>
    );
}