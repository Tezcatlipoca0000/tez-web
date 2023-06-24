'use client'
import { useState, useEffect } from "react";

export default function Example() {
    const [theObj, SetTheObj] = useState(null);
    const [theValue, SetTheValue] = useState(0);

    async function handleClick() {
        let newValue = theValue + 1;
        SetTheValue(newValue);
        let newObj = {
            "key1": newValue,
        }
        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(newObj),
            headers: {"Content-Type": "application/json"},
        });
        if (!response.ok) {
            throw Error('error here');
        }
    }

    useEffect(() => {
        async function getData () {
            const response = await fetch('/api');
            if (!response.ok) {
                throw Error('error here');
            }
            const data = await response.json()
            SetTheObj(data);
            SetTheValue(data.key1);
        }
        getData();
    }, [theValue, theObj]);

    return (
        <div>
          {theValue}
          <button onClick={handleClick}>Increment!</button>
        </div>
    )
}