console.log("The Sciprt File is Loaded...");

const ACCESS_TOKEN = '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';
const POPUP_ID = '627e243a77f915c6c90748a0';
const APP_SLUG = 'brillmark-popup';
// const APP_HOST = 'https://2ee0-103-218-26-239.ngrok.io';
const APP_HOST = 'http://shopify-popup-app.brillmark.com';

const pathForJS = '/js/main.js';
const pathForCSS = '/css/style.css';

const getThemeID = () => {
    const themeId = Shopify.theme.id;
    return themeId;
};

const getAssetsByThemeID = async () => {
    const rawResponse = await fetch(
        '/admin/api/2022-04/themes/' + getThemeID() + '/assets.json' + '?asset[key]=layout/theme.liquid&fields=key,value', {
            method: 'GET',
            headers: {
                'X-Shopify-Access-Token': ACCESS_TOKEN
            }
        }
    );
    const assets = await rawResponse.json();

    //console.log(assets.asset.value);
    return await assets.asset.value;
};

const putAssetsByThemeID = async (value) => {
    const PUT_DATA = {
        asset: {
            key: 'layout/theme.liquid',
            value: value
        }
    };
    const rawResponse = await fetch(
        '/admin/api/2022-04/themes/' + getThemeID() + '/assets.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': ACCESS_TOKEN
            },
            body: JSON.stringify(PUT_DATA)
        }
    );
    const assets = await rawResponse.json();

    console.log(assets);
    //return await assets.asset.value;
};

// ========================================
//              SNIPPET FOR CSS
// ========================================
const cssSnippet = "{% include 'popupcss' %}";
const cssHeadEndTag = "</head>";
const cssNewHeadEndTag = cssSnippet + '\n' + cssHeadEndTag;

getAssetsByThemeID().then(
    (result) => { 
        const themeLiquid = result;
        const newThemeLiquid = themeLiquid.replace(cssHeadEndTag, cssNewHeadEndTag);

        if(themeLiquid.indexOf(cssSnippet) < 1) {
            putAssetsByThemeID(newThemeLiquid).then((result) => console.log(result)).catch((error) => console.log(error));
        }
    }
);

// ========================================
//              SNIPPET FOR JS
// ========================================

const jsSnippet = "{% include 'popupjs' %}";
const jsBodyEndTag = "</body>";
const jsNewBodyEndTag = jsSnippet + '\n' + jsBodyEndTag;

getAssetsByThemeID().then(
    (result) => { 
        const themeLiquid = result;
        const newThemeLiquid = themeLiquid.replace(jsBodyEndTag, jsNewBodyEndTag);

        if(themeLiquid.indexOf(jsSnippet) < 1) {
            putAssetsByThemeID(newThemeLiquid).then((result) => console.log(result)).catch((error) => console.log(error));
        }
    }
);

// ========================================
//              SNIPPET FOR HTML
// ========================================
const htmlSnippet = "{% include 'popuphtml' %}";
const htmlMainEndTag = "</main>";
const htmlNewMainEndTag = htmlSnippet + '\n' + htmlMainEndTag;

getAssetsByThemeID().then(
    (result) => { 
        const themeLiquid = result;
        const newThemeLiquid = themeLiquid.replace(htmlMainEndTag, htmlNewMainEndTag);

        if(themeLiquid.indexOf(htmlSnippet) < 1) {
            putAssetsByThemeID(newThemeLiquid).then((result) => console.log(result)).catch((error) => console.log(error));
        }
    }
);

// ========================================
//              END ------------------
// ========================================





const putSnippetsByThemeID = async (value) => {
    const PUT_DATA = value;
    const rawResponse = await fetch(
        '/admin/api/2022-04/themes/' + getThemeID() + '/assets.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': ACCESS_TOKEN
            },
            body: JSON.stringify(PUT_DATA)
        }
    );
    const result = await rawResponse.json();

    console.log(result);
};


// For CSS
const snippetCSSLiquid = `<link rel="stylesheet" href="`+ APP_HOST + pathForCSS.toString() +`" />`;
const PUT_SNIPPET_CSS = {
    asset: {
        key: 'snippets/popupcss.liquid',
        value: snippetCSSLiquid
    }
};
putSnippetsByThemeID(PUT_SNIPPET_CSS).then((result) => console.log(result)).catch((error) => console.log(error));

// For JS
const snippetJSLiquid = `<script src="`+ APP_HOST + pathForJS.toString() +`"></script>`;
const PUT_SNIPPET_JS = {
    asset: {
        key: 'snippets/popupjs.liquid',
        value: snippetJSLiquid
    }
};
putSnippetsByThemeID(PUT_SNIPPET_JS).then((result) => console.log(result)).catch((error) => console.log(error));

// Get the Popup Data From Our API
const getPopupData = async () => {
    const rawResponse = await fetch(
        APP_HOST + '/api/popup/' + POPUP_ID, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': ACCESS_TOKEN
            }
        }
    );
    const result = await rawResponse.json();

    // For HTML
    const snippetHTMLLiquid = `
        <div class="popup" id="popup">
            <img src="images/tick.png" alt="" />
            <h2>`+ result.data.title +`</h2>
            <p>`+ result.data.description +`</p>
            <button type="button" onclick="closepopup()">OK</button>
        </div>
    `;
    const PUT_SNIPPET_HTML = {
        asset: {
            key: 'snippets/popuphtml.liquid',
            value: snippetHTMLLiquid
        }
    };
    await putSnippetsByThemeID(PUT_SNIPPET_HTML).then((result) => console.log(result)).catch((error) => console.log(error));
};

getPopupData().then((result) => console.log(result)).catch((error) => console.log(error));


