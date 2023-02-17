import { NextRequest } from "next/server";

const AWS = require('aws-sdk');

AWS.config.update({
    region: '-us-east-1',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY,
    },
});

  

export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    console.log('body', body)

    const message = `
    Name: ${body.name}rn
    Email: ${body.email}rn
    Message: ${body.message}
    `;

    const params = {
        Destination: {
            ToAddresses: ['pereszteginagy.gellert@gmail.com']
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'New Form Submission'
            },
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: message.replace(/rn/g, '<br>')
                }
            }
        },
        Source: 'forms@fogorvosgyor.hu',
    };

    await new AWS.SES().sendEmail(params).promise();

    res.status(200).json({ status: 'Ok' });
}
