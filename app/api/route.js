import { NextResponse } from 'next/server';

export async function POST(request) {
    //console.log('api post resquest ----> ', request);
    const body = await request.json();
    console.log('apo post body ----> ', body);
    return NextResponse.json({res: 'ok'});
    let msg = 
    `<div>
        <p>Email: ${body.email}</p>
        <p>Client Message:<br>${body.msg}</p>
        <p>Auto Message:<br>${body.something}</p>
    </div>`;

}