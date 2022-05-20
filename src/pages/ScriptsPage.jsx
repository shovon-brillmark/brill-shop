import { Page, Layout, Button } from "@shopify/polaris";

import { gql, useMutation, useQuery } from "@apollo/client";

import { useState } from "react";

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
            scriptTag {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

const QUERY_SCRIPT_TAGS = gql`
    query {
        scriptTags(first: 5) {
            edges {
                node {
                    id
                    src
                    displayScope
                }
            }
        }
    }
`;

const DELETE_SCRIPT_TAGS = gql`
    mutation scriptTagDelete($id: ID!) {
        scriptTagDelete(id: $id) {
            deletedScriptTagId
            userErrors {
              field
              message
            }
        }
    }
`;

const ScriptsPage = () => {
    const [addScriptTag, { onSubmitting, onSubmitError }] = useMutation(CREATE_SCRIPT_TAG);
    const [deleteScriptTag, { onDeleting, onDeletingError }] = useMutation(DELETE_SCRIPT_TAGS);
    const { onDataLoading, onDataError, data } = useQuery(QUERY_SCRIPT_TAGS);

    if (onSubmitting) return <div>Submitting...</div>;
    if (onSubmitError) return <div>{onSubmitError.message}</div>;

    if (onDeleting) return <div>Deleting...</div>;
    if (onDeletingError) return <div>{onDeletingError.message}</div>;

    if (onDataLoading) return <div>Loading...</div>;
    if (onDataError) return <div>{onDataError.message}</div>;

    const [onSuccessMessage, setOnSuccessMessage] = useState('');

    return (
        <Page fullWidth>
            <Layout>
                <Layout.Section>
                    <h1>Script Page</h1>
                    <hr></hr>
                    <Button primary onClick={
                        () => {  
                            addScriptTag({
                                variables: {
                                    input: {
                                        src: "https://2ee0-103-218-26-239.ngrok.io/test-script.js",
                                        displayScope: "ALL",
                                        cache: false
                                    },
                                },
                                refetchQueries: [{ query: QUERY_SCRIPT_TAGS }]
                            }).then(() => {
                                setOnSuccessMessage('Success');
                            console.log(onSuccessMessage);
                            });
                        }
                    }>Add Script Tag</Button>
                    <br></br>
                    <hr></hr>
                    <h1>Script Tags List</h1>
                    <hr></hr>
                    <ul>
                        {data?.scriptTags?.edges?.map(item => {
                            return (
                                <li
                                    key={item.node.id}>
                                    ID : {item.node.id}
                                    | Source : {item.node.src} |
                                    <Button primary onClick={() => {
                                        deleteScriptTag({
                                            variables: {
                                                id: item.node.id,
                                            },
                                            refetchQueries: [{ query: QUERY_SCRIPT_TAGS }]
                                        }).then(() => {
                                            setOnSuccessMessage('Success');
                                            console.log(onSuccessMessage);
                                        });
                                    }}>
                                        Delete
                                    </Button>
                                </li>
                                // <div key={item.node.id}>
                                //     <p>{item.node.id}</p>
                                // </div>
                            );
                        })}

                    </ul>

                </Layout.Section>
            </Layout>
        </Page>
    );
};

export default ScriptsPage;