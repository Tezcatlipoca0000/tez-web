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
        <div className="w-screen my-6 flex flex-col justify-center items-center">
            <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleServices}>
                Services 
                {down ? <ArrowDown width="4"/> : <ArrowUp />}
            </button>
            <div id="serviceList" className="shadow w-11/12">
                <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                    <li>
                        <button className="featBtn">
                            <div className="flex items-center">
                                <ArrowDown width="2"/>
                                <h3 className="ml-[33%]">
                                    {dictionary.Services.hostTitle}
                                </h3>
                            </div>
                            <span className="featDesc">
                                {dictionary.Services.hostContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            <div className="flex items-center">
                                <ArrowDown width="2"/>
                                <h3 className="ml-[33%]">
                                    {dictionary.Services.domTitle}
                                </h3>
                            </div>
                            <span className="featDesc">
                                {dictionary.Services.domContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            <div className="flex items-center">
                                <ArrowDown width="2"/>
                                <h3 className="ml-[33%]">
                                    {dictionary.Services.writeTitle}
                                </h3>
                            </div>
                            <span className="featDesc">
                                {dictionary.Services.writeContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            <div className="flex items-center">
                                <ArrowDown width="2"/>
                                <h3 className="ml-[33%]">
                                    {dictionary.Services.imgTitle}
                                </h3>
                            </div>
                            <span className="featDesc">
                                {dictionary.Services.imgContent}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="featBtn">
                            <div className="flex items-center">
                                <ArrowDown width="2"/>
                                <h3 className="ml-[33%]">
                                    {dictionary.Services.maintTitle}
                                </h3>
                            </div>
                            <span className="featDesc">
                                {dictionary.Services.maintContent}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}