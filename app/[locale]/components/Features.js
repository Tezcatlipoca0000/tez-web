'use client';
import ArrowDown from "../icons/ArrowDown";
import ArrowRight from "../icons/ArrowRight";
import ArrowUp from "../icons/ArrowUp";
import { useState } from "react";

export default function Features({ dictionary }) {
    const [down, setDown] = useState(false);

    function toggleFeatures () {
        document.getElementById('featuresList').classList.toggle('hidden');
        setDown(down ? false : true);
    }
    return (
        <div className="w-11/12 my-6">
            <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFeatures}>
                Features 
                {down ? <ArrowDown /> : <ArrowUp />}
            </button>
            
            <div id="featuresList" className="z-10 divide-y divide-gray-100 rounded-lg shadow w-full">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4 hover:animate-[bounce_900ms_2]">
                            {dictionary.Home.customTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.customContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.colorTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.colorContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.respTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.respContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.interTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.interContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.seoTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.seoContent}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}