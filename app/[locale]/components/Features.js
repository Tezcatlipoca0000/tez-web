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
            
            <div id="featuresList" className="shadow w-full">
                <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                    <li>
                        <button className="featBtn">
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
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.manageTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.manageContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.dbTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.dbContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.ecomTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.ecomContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.adsTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.adsContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.analTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.analContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn w-full px-4 py-2 inline-flex items-center space-x-4">
                            {dictionary.Home.apiTitle}
                            <ArrowRight />
                            <span className="featDesc">
                                {dictionary.Home.apiContent}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}