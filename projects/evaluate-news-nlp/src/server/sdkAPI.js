export async function sdkGet(formText) {


    const func = async (input)
    console.log(input)
    let AYLIENTextAPI = require('aylien_textapi');
    let textapi = new AYLIENTextAPI({
      application_id: process.env.API_ID,
      application_key: process.env.API_KEY
    });

    const get = textapi.hashtags({
        url: input
        }, function(error, response) {
        if (error === null) {
            console.log(response.hashtags);
        }
    });

    console.log(get)
    return get

}

