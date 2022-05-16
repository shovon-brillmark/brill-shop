import { useCallback, useState } from "react";

import {
    Form,
    FormLayout,
    TextField,
    Button,
    Stack
} from "@shopify/polaris";

export const PopupForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { onSubmit, onSubmitLoader } = props;

    const handleTitleChange = useCallback(
        (value) => setTitle(value),
        [],
    );

    const handleDescriptionChange = useCallback((value) => setDescription(value), []);

    const handleReset = useCallback(() => {
        setTitle('');
        setDescription('');
    }, []);

    const handleSubmit = useCallback((_event) => {
        onSubmit({ title, description });
    });

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        id="title"
                        value={title}
                        label="Title"
                        type="text"
                        autoComplete="text"
                        autoFocus={true}
                        helpText={
                            <span>
                                This will show on the title bar of the popup on top.
                            </span>
                        }
                        onChange={handleTitleChange}
                    />
                    <TextField
                        id="description"
                        value={description}
                        label="Description"
                        type="text"
                        multiline={3}
                        autoComplete="text"
                        autoFocus={false}
                        helpText={
                            <span>
                                This will show on the body of the popup area.
                            </span>
                        }
                        onChange={handleDescriptionChange}
                    />
                    <Stack distribution="equalSpacing">
                        <Button
                            onClick={handleReset}
                        >
                            RESET
                        </Button>
                        <Button
                            primary
                            loading={onSubmitLoader}
                            submit
                        >
                            SAVE
                        </Button>
                    </Stack>
                </FormLayout>
            </Form>
        </>
    );
}