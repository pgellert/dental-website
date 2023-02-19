const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    },
});

export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    console.log('body', body)

    const message = `
    Name: ${body.name}<br>
    Email: ${body.email}<br>
    Phone: ${body.phone}<br>
    Local: ${body.locale}<br>
    Message: ${body.message}
    `;

    const params = {
        Destination: {
            ToAddresses: ['pereszteginagy.gellert@gmail.com']
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'Contact Form Submission'
            },
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: message,
                }
            }
        },
        Source: 'forms@fogorvosgyor.hu',
    };

    await new AWS.SES().sendEmail(params).promise();

    res.status(200).json({ status: 'Ok' });
}
