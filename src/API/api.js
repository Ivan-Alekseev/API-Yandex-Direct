const urlSandBox = 'https://api-sandbox.direct.yandex.com/json/v5';
const urlYandex = 'https://api.direct.yandex.com/json/v5';
const OAuth_TOKEN ='y0_AgAAAAAr9WkVAAqO_QAAAADtu4naPddbbeuaQ4uUIMFetJLR9bUFnuo';
// const sandboxMaster_TOKEN = 'MKwdXzlzWmk5USrx';
// const CLIENT_ID_TOKEN = '0e3e351484ad411086ec9ccaa0685be2';


export const Fn = {
      createRequestCampaigns:async (bodyParams, callback) => {
      console.log("bodyParams", bodyParams);
      const promise = await fetch(`${urlSandBox}/campaigns`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${OAuth_TOKEN}`,
        // 'Accept-Language': 'ru',
        // "Origin":"https://api-sandbox.direct.yandex.com/",
        // 'Access-Control-Allow-Origin': '*',
      },
      
      body:JSON.stringify(
        bodyParams
      ),
    })
      .then(response => response.json())
      .then(res => res)

      console.log(promise.result.Campaigns);
      callback(promise.result.Campaigns);
    }
}