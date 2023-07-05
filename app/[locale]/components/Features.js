'use client';
import customBG from "@/public/customBG.jpg";
import colorModeBG from "@/public/colorModeBG.jpg";
import responsiveBG from "@/public/responsiveBG.jpg";
import interBG from "@/public/interBG.jpg";
import seoBG from "@/public/seoBG.jpg";
import accesibBG from "@/public/accesibBG.png";
import manageBG from "@/public/manageBG.jpg";
import dbBG from "@/public/dbBG.png";
import ecommBG from "@/public/ecommBG.jpg";
import adsBG from "@/public/adsBG.jpg";
import analBG from "@/public/analBG.png";
import apiBG from "@/public/apiBG.jpg";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import { useState } from "react";
import Image from "next/image";

export default function Features({ dictionary }) {
    const [arrows, setArrows] = useState({
        list: false,
        custom: true,
        color: true,
        resp: true,
        inter: true,
        seo: true,
        accesib: true,
        manage: true,
        db: true,
        ecom: true,
        ads: true,
        anal: true,
        api: true
    });
    
    const bgImages = [customBG, colorModeBG, responsiveBG, interBG, seoBG, accesibBG, manageBG, dbBG, ecommBG, adsBG, analBG, apiBG];

    function toggleFeature(e, arrow) {
        const newArrows = { ...arrows };
        newArrows[arrow] = !arrows[arrow]
        setArrows(newArrows);
        if (arrow === 'list') {
            document.getElementById('featuresList').classList.toggle('hidden');
        } else {
            let desc = e.currentTarget.lastElementChild;
            desc.classList.toggle('descAppear');
        }
    }

    const renderedFeaturesBig = Object.keys(dictionary.Features).map((key, idx) => {
        return (
            <div className="featCard" onClick={(e) => toggleFeature(e, key)} data-feat={key} key={key}>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} className={arrows[key] ? '' : 'blur-sm'}/>
                </div>
                <h3 className="z-10 text-4xl">
                    {dictionary.Features[key].title}
                </h3>
                <p className="z-10 featDesc text-justify mt-5">
                    {dictionary.Features[key].content}
                </p>
            </div>     
        );
    });

    const renderedFeaturesSmall = Object.keys(dictionary.Features).map((key) => {
        return (
            <li key={key}>
                <button className="featBtn" onClick={(e) => {toggleFeature(e, key);}}>
                    <div className="flex items-center">
                        {arrows[key] ? <ArrowDown width="2" /> : <ArrowUp width="2" />}
                        <h3 className="ml-6">
                            {dictionary.Features[key].title}
                        </h3>
                    </div>
                    <p className="featDesc">
                        {dictionary.Features[key].content}
                    </p>
                </button>
            </li>
        );
    });

    return (
        <>
            {/* For larger screens */}
            <div className="w-11/12 my-6 hidden lg:block">
                <h2>Features</h2>
                <div className="flex flex-wrap">
                    {renderedFeaturesBig}
                </div>
            </div>

            {/* For smaller screens */}
            <div className="w-screen my-6 flex flex-col justify-center items-center lg:hidden">
                <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={(e) => toggleFeature(e, 'list')}>
                    <h2>Features</h2> 
                    {arrows["list"] ? <ArrowDown width="4" /> : <ArrowUp width="4" />}
                </button>
                <div id="featuresList" className="shadow w-11/12">
                    <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                        {renderedFeaturesSmall}
                    </ul>
                </div>
            </div>
        </>
    );
}