const { Client } = require('@notionhq/client');

exports.handler = async function (event, context) {
    try {
        return {
            statusCode: 200,
             body: JSON.stringify({"result":"todo"}),
            headers: {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            }, 
        };
    } catch (e) {
        console.error(e);
        
        return {
            statusCode: 500,
            body: e.toString(),
            headers: {
              "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            }, 
        };
    };
};