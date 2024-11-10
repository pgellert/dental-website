const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    },
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
    return emailPattern.test(email);
}

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

    var params = {
        Destination: {
            ToAddresses: [process.env.NEXT_PUBLIC_FORM_EMAIL_TO],
            CcAddresses: [process.env.NEXT_PUBLIC_FORM_EMAIL_CC],
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
        ReplyToAddresses: [
            "EMAIL_ADDRESS",
            /* more items */
          ],
    };

    if (isValidEmail(body.email)) {
        params.ReplyToAddresses = [body.email];
    }

    await new AWS.SES().sendEmail(params).promise();

    res.status(200).json({ status: 'Ok' });
}
