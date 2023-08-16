import { NextResponse } from 'next/server';
console.log('the route file!!! start');

export async function POST(request) {

    console.log('api post resquest ----> ', request);
    const body = await request.json();
    console.log('apo post body ----> ', body);
    return NextResponse.json({res: 'ok'});

}