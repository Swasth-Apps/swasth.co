
exports.handler = async event => {
    const AWS = require("aws-sdk");

    let requestParams = JSON.parse(event.body);
    let email = requestParams.email;

    AWS.config.update({
        accessKeyId: "AKIAIXNPLW6ZMITC2OVA",
        secretAccessKey: "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",
        region: 'us-east-1'
    });

    const ses = new AWS.SES({apiVersion: "2010-12-01"});
    const params = {
        Destination: {
            ToAddresses: ["abcd@yopmail.com"] // Email address/addresses that you want to send your email
        },
        //   ConfigurationSetName: <<ConfigurationSetName>>,
        Message: {
            Body: {
                Html: {
                    // HTML Format of the email
                    Charset: "UTF-8",
                    Data: `<html lang="en">
                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                        </head>
                        <body>
                        <font face="Courier New">Hi,</font>
                        <div>
                            <font face="Courier New"><br></font>
                        </div>
                        <div>
                            <font face="Courier New">I have requested demo of resiliens for
                                ${requestParams.user_type || "Client"}.</font>
                        </div>
                        <div>
                            <font face="Courier New">${requestParams.message}</font>
                        </div>
                        <div>
                            <font face="Courier New"><br></font>
                        </div>
                        <div>
                            <font face="Courier New">You can reply me back via Email: ${email} or Phone Number:
                                ${requestParams.phone_number}</font>
                        </div>
                        <div>
                            <font face="Courier New"><br></font>
                        </div>
                        <div>
                            <font face="Courier New"><br></font>
                        </div>
                        <div>
                            <font face="Courier New">Thanks !</font>
                        </div>
                        <div>
                            <font face="Courier New">${requestParams.first_name} ${requestParams.last_name}</font>
                        </div>
                        </body>
                        </html>`
                },
                Text: {
                    Charset: "UTF-8",
                    Data: ""
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Requesting demo for Resiliens"
            }
        },
        Source: email
    };

    return ses.sendEmail(params).promise().then(data => {
        console.log("email submitted to SES", data);
        return {
            statusCode: 200,
            body: `Message sent`,
        }
    })
        .catch(error => {
            console.log(error);
            return {
                statusCode: 500,
                body: `Message unsuccesfully sent, error: ${error}`,
            }
        })
};
