const fs = require('fs');
//const constants = require('/Tez/tez-web/app/lib/constants.js');
import { NextResponse } from 'next/server';


export async function getData() {
    //console.log('the inc function constants --->', constants);
    const data = fs.readFileSync('/constants.js');
    console.log('the get data ------> ', data);
    return NextResponse.json({'data': 'ok'});
}