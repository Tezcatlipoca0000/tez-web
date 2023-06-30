'use client';
import { useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import ArrowRight from "../icons/ArrowRight";

export default function Services({ dictionary }) {
    const [down, setDown] = useState(false);

    function toggleServices() {
        document.getElementById('serviceList').classList.toggle('hidden');
        setDown(down ? false : true);
    }
    return (
        <div className="w-11/12 my-6">
            <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleServices}>
                Services 
                {down ? <ArrowDown /> : <ArrowUp />}
            </button>
            <div id="serviceList" className="shadow w-full">
                <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                    <li>
                        <button className="featBtn">
                            {dictionary.Services.hostTitle}
                            <ArrowRight />
                            <span className="featDesc1">
                                {dictionary.Services.hostContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            {dictionary.Services.domTitle}
                            <ArrowRight />
                            <span className="featDesc1">
                                {dictionary.Services.domContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            {dictionary.Services.writeTitle}
                            <ArrowRight />
                            <span className="featDesc1">
                                {dictionary.Services.writeContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            {dictionary.Services.imgTitle}
                            <ArrowRight />
                            <span className="featDesc1">
                                {dictionary.Services.imgContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            {dictionary.Services.mainTitle}
                            <ArrowRight />
                            <span className="featDesc1">
                                {dictionary.Services.mainContent}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}