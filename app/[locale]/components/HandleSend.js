//'use server';

export default async function HandleSend(e) {
    e.preventDefault();
    let data = {
        "email": e.target.elements.userEmail,
        "msg": e.target.elements.userMsg,
        "list": encodeURIComponent(document.getElementById('autoList').outerHTML)
    };
    const res = await fetch('http://localhost:3000/api', {
        method: 'POST',
        
        body: JSON.stringify({test: 'ok'}),
    });
    //const response = await res.json();
    console.log(res);
    //if (!res.ok) {
    //    console.log('handle sendMsg not response ok ----> ', res);
    //}
    //console.log('handle response ok ----> ', res);
}