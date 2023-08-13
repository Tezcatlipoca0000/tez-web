import { NextResponse } from 'next/server';
console.log('the route file!!! start');

export async function POST(request) {

    console.log('api post resquest ----> ', request);
    return NextResponse.json({res: 'ok'});

}