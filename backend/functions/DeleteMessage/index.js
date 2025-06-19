const dynamoDb = require('../../config/dynamoDbConfig.js');

exports.handler = async (event) => {
    let id;
    // Try to get id from pathParameters or from body
    if (event.pathParameters && event.pathParameters.id) {
        id = event.pathParameters.id;
    } else if (event.body) {
        try {
            const body = JSON.parse(event.body);
            id = body.id;
        } catch (e) {
            // ignore
        }
    }

    if (!id) {
        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "DELETE, OPTIONS"
            },
            body: JSON.stringify({ error: 'Message id is required.' })
        };
    }

    const params = {
        TableName: 'Messages',
        Key: {
            id: id
        }
    };

    try {
        await dynamoDb.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "DELETE, OPTIONS"
            },
            body: JSON.stringify({ message: 'Message deleted successfully.' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "DELETE, OPTIONS"
            },
            body: JSON.stringify({ error: 'Could not delete message.' })
        };
    }
}; 