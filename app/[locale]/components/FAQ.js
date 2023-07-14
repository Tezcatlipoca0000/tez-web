'use client';
import { useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";

export default function FAQ({ dictionary }) {
    const [faqs, setFaqs] = useState([
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ]);

    function toggleFaqs(e) {
        let idx = e.currentTarget.dataset.faq,
            newFaqs = [...faqs];
        if (idx == 0) document.getElementById('faqList').classList.toggle('hidden');
        newFaqs[idx] = !newFaqs[idx];
        setFaqs(newFaqs);
    }

    const renderedFaqs = dictionary.Faqs.q.map((q, idx) => {
        return (
            <li key={`faq-${idx}`} className="p-4 cursor-pointer flex justify-between items-center" onClick={toggleFaqs} data-faq={idx+1}>
                {q}
                {faqs[idx+1] ? <ArrowDown width={2} /> : <ArrowUp width={2} />}
            </li>
        );
    });

    return (
        <div className="w-screen my-6 flex flex-col justify-center items-center">
                <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFaqs} data-faq={0}>
                    <h2>FAQ</h2> 
                    {faqs[0] ? <ArrowDown width="4" /> : <ArrowUp width="4" />}
                </button>
                <div id="faqList" className="shadow w-11/12">
                    <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                        {renderedFaqs}
                    </ul>
                </div>
            </div>
    );
}