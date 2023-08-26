import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer");
const myMail = 'tezcatlipoca0000@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myMail,
        pass: "pass"
    }

});

export async function POST(request) {
    //console.log('api post resquest ----> ', request);
    const body = await request.json();
    console.log('apo post body ----> ', body);
    //return NextResponse.json({res: 'ok'});
    let msg = {
        from: body.email,
        to: myMail,
        subjetc: "WEB REQUESTED",
        html: `<div>
                    <p>Client Message:<br>${body.msg}</p>
                    <p>Auto Message:<br>${body.something}</p>
                </div>`
    };

    transporter.sendMail(msg, (err, succ) => {
        if (err) {
            console.log('error sending mail ----> ', err);
        } else {
            console.log('success sending mail ----> ', succ);
        }
    });

}