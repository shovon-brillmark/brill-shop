export const addPopup = ({ title, description }) => {
    let addPopupEndpoint = '/popup/add';

    return fetch(`${addPopupEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: { title, description }
    })
    .then(response => {
        console.log('success');
        return response.json();
    })
    .catch(err => console.log(err));
};