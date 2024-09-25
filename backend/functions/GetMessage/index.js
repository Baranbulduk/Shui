const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: 'Messages'
    };

    try {
        const data = await dynamoDb.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };
    } catch (error) {
        console.error(error); // Lägg till denna rad för att logga felet
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not retrieve messages' })
        };
    }
};