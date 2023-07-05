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
import ArrowRight from "../icons/ArrowRight";
import ArrowUp from "../icons/ArrowUp";
import { useState } from "react";
import Image from "next/image";

export default function Features({ dictionary }) {
    const [list, setList] = useState(false);
    /* maybe --- 
                    const [values, setValues] = useState({
                    value1: "",
                    value2: "",
                    value3: "",
                    ...
                    });

                    const changeValue = (index, value) => {
                    const newValues = { ...values };
                    newValues[index] = value;
                    setValues(newValues);
                    };
    */
    const bgImages = [customBG, colorModeBG, responsiveBG, interBG, seoBG, accesibBG, manageBG, dbBG, ecommBG, adsBG, analBG, apiBG];

    function toggleFeatures() {
        document.getElementById('featuresList').classList.toggle('hidden');
        setList(!list);
    }

    function toggleFeature(e) {
        let desc = e.currentTarget.lastElementChild,
            data = e.currentTarget.dataset.feat,
            img = document.querySelector(`[data-value="img-${data}"]`),
            down = document.querySelector(`[data-value="down-${data}"]`),
            up = document.querySelector(`[data-value="up-${data}"]`);
        desc.classList.toggle('descAppear');
        if (img) img.classList.toggle('blur-sm');
        if (down) down.classList.toggle('hidden');
        if (up) up.classList.toggle('hidden'); 
    }

    const renderedFeaturesBig = Object.keys(dictionary.Features2).map((key, idx) => {
        return (
            <div className="featCard" onClick={toggleFeature} data-feat={key} key={key}>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} data-value={`img-${key}`}/>
                </div>
                <h3 className="z-10 text-4xl">
                    {dictionary.Features2[key].title}
                </h3>
                <p className="z-10 featDesc text-justify mt-5">
                    {dictionary.Features2[key].content}
                </p>
            </div>     
        );
    });

    const renderedFeaturesSmall = Object.keys(dictionary.Features2).map((key) => {
        return (
            <li key={key}>
                <button className="featBtn" onClick={toggleFeature} data-feat={key}>
                    <div className="flex items-center">
                        <ArrowDown props={...{width:"2", data:`down-${key}`}} />
                        <ArrowUp props={...{width:"2", data:`up-${key}`, class:"hidden"}} />
                        <h3 className="ml-6">
                            {dictionary.Features2[key].title}
                        </h3>
                    </div>
                    <p className="featDesc">
                        {dictionary.Features2[key].content}
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
                <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFeatures}>
                    <h2>Features</h2> 
                    {list ? <ArrowDown props={...{width:"4", data:"down"}}/> : <ArrowUp props={...{width:"4", data:"up", class:""}} />}
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