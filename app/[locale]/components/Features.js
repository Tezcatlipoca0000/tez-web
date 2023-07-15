'use client';
import customBG from "@/public/customBG.jpg";
import colorModeBG from "@/public/colorModeBG.jpg";
import responsiveBG from "@/public/responsiveBG.jpg";
import interBG from "@/public/interBG.jpg";
import seoBG from "@/public/seoBG.jpg";
import accesibBG from "@/public/accesibBG.png";
import AccesibIcon from "../icons/AccesibIcon"; // testing svg
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
    const [features, setFeatures] = useState({
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
    const [position, setPosition] = useState(0);
    
    const bgImages = [customBG, colorModeBG, responsiveBG, interBG, seoBG, accesibBG, manageBG, dbBG, ecommBG, adsBG, analBG, apiBG];

    function toggleFeature(e, feature) {
        const newFeatures = { ...features };
        newFeatures[feature] = !features[feature]
        setFeatures(newFeatures);
        if (feature === 'list') {
            document.getElementById('featuresList').classList.toggle('hidden');
        } else {
            let desc = e.currentTarget.lastElementChild;
            desc.classList.toggle('descAppear');
        }
        let small = e.currentTarget;
        if (small.classList.contains('featBtn')) {
            if (small.classList.contains('bounceRight')) {
                small.classList.remove('bounceRight');
                small.classList.add('bounceLeft')
            } else {
                small.classList.remove('bounceLeft');
                small.classList.add('bounceRight');
            }
        }
    }

    const carouselItems = Object.keys(dictionary.Features).map((key, idx) => {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className={`absolute top-0 left-0 w-full h-full ${idx === 0 ? '' : 'hidden'}`}>
                    <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} className={features[key] ? '' : 'blur-sm'} />
                </div>
                <h3 className={`z-10 text-4xl ${key === 'custom' ? '' : 'hidden'}`}>
                    {dictionary.Features[key].title}
                </h3>
                <p className="z-10 featDesc text-justify mt-5">
                    {dictionary.Features[key].content}
                </p>
            </div>
        );
    });

    const renderedFeaturesBig = Object.keys(dictionary.Features).map((key, idx) => {
        return (
            <div className="featCard" onClick={(e) => toggleFeature(e, key)} key={`big-Features-${key}`}>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {idx === 5 ? <AccesibIcon /> : <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} className={features[key] ? '' : 'blur-sm'} />}
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
            <li key={`small-Features-${key}`}>
                <button className="featBtn" onClick={(e) => {toggleFeature(e, key);}}>
                    <div className="flex items-center">
                        {features[key] ? <ArrowDown width="2" /> : <ArrowUp width="2" />}
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
            {/* Carousel */}
            <div className="relative flex justify-center items-center w-10/12 bg-slate-900 h-56 overflow-hidden rounded-lg md:h-96">
                <div className="relative w-full h-full">
                    {carouselItems}
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

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
                    {features["list"] ? <ArrowDown width="4" /> : <ArrowUp width="4" />}
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