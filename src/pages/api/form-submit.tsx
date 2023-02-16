import { NextRequest } from "next/server";

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);


export default function handler(req, res) {
    const body = JSON.parse(req.body);
    console.log('body', body)

    const message = `
    Name: ${body.name}rn
    Email: ${body.email}rn
    Message: ${body.message}
    `;

    mail.send({
        to: 'pereszteginagy.gellert@gmail.com',
        from: 'pereszteginagy.gellert@gmail.com',
        subject: 'New Form Submission',
        text: message,
        html: message.replace(/rn/g, '<br>'),
      }).then(() => {
        res.status(200).json({ status: 'Ok' });
    });
}


function handleFormSubmission(req: NextRequest) {
    console.log("Body:", req.body)
}
