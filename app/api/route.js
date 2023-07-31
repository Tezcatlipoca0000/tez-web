const fs = require('fs');
import { NextResponse } from 'next/server';
const path = require('path');
const dbPath = path.join(process.cwd(), 'app/lib/variables.json');


export async function GET() {
    //console.log('the get api ---^ ');
    const data = fs.readFileSync(dbPath, 'utf-8');
    console.log('GET --> data ---> ', data, JSON.parse(data));
    return NextResponse.json(JSON.parse(data));
}

export async function POST(request) {
    const data = await request.json();
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data));
    } catch(err) {
        console.log('error catched post route write file ----> ', err);
    }
    return NextResponse.json({'data': 'ok'});
}