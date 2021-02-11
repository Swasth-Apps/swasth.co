exports.handler = async event => {
    const AWS = require("aws-sdk");

    let requestParams = JSON.parse(event.body);
    let email = requestParams.email;

    AWS.config.update({
        accessKeyId: process.env.GATSNY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.GATSNY_AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
    });

    const ses = new AWS.SES({apiVersion: "2010-12-01"});
    const params = {
        Destination: {
            ToAddresses: [process.env.GATSBY_AWS_EMAIL] // Email address/addresses that you want to send your email
        },
        //   ConfigurationSetName: <<ConfigurationSetName>>,
        Message: {
            Body: {
                Html: {
                    // HTML Format of the email
                    Charset: "UTF-8",
                    Data:
                        `<html>
                  <body>
                    Hi,
                    <br />
                    <p>I have requested demo for resiliens for ${requestParams.user_type || "Client"}.
                    ${requestParams.message}
                    </p>
                    You can reply me back via Email: ${email} or Phone Number: ${requestParams.phone_number}  
                    <p>
                    Thanks !
                    ${requestParams.first_name} ${requestParams.last_name} 
                    </p>
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
