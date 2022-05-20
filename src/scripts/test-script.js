import { Theme } from '@shopify/shopify-api/dist/rest-resources/2022-04/index.js';

console.log("Line 3: This is from script Tag Page");


const getThemes = async () => {
    const test_session = await Shopify.Utils.loadCurrentSession(request, response);
    const themes = await Theme.all({
        session: test_session,
    });

    console.log(themes);
};

getThemes();