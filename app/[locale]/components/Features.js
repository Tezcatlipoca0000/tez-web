'use client';
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import { useState } from "react";

export default function Features() {
    const [down, setDown] = useState(true);

    function toggleFeatures () {
        document.getElementById('featuresList').classList.toggle('hidden');
        setDown(down ? false : true);
    }
    return (
        <div className="w-11/12">
            <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFeatures}>
                Features 
                {down ? <ArrowDown /> : <ArrowUp />}
            </button>
            
            <div id="featuresList" className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-full">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}