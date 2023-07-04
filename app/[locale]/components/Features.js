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
    const [down, setDown] = useState(false);

    function toggleFeatures() {
        document.getElementById('featuresList').classList.toggle('hidden');
        setDown(down ? false : true);
    }

    function toggleFeature(e) {
        let desc = e.currentTarget.lastElementChild,
            img = e.currentTarget.firstChild.firstChild;
        desc.classList.toggle('descAppear');
        img.classList.toggle('blur-sm');
        // todo: for smaller screen there's no img ele 
    }

    return (
        <>
            {/* For larger screens */}
            <div className="w-11/12 my-6 hidden lg:block">
                <h2>Features</h2>
                <div className="flex flex-wrap">

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={customBG} alt="custom design background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.customTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.customContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={colorModeBG} alt="color mode background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.colorTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.colorContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={responsiveBG} alt="responsive design background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.respTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.respContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={interBG} alt="internationalization background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.interTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.interContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={seoBG} alt="SEO background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.seoTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.seoContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={accesibBG} alt="Accesibility background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.accesibTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.accesibContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={manageBG} alt="Self-Manageable background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.manageTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.manageContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={dbBG} alt="Database Administration background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.dbTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.dbContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={ecommBG} alt="Ecommerce background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.ecomTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.ecomContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={adsBG} alt="Google Ads background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.adsTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.adsContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={analBG} alt="Google Analytics background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.analTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.analContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature}>
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={apiBG} alt="API Integration background image" fill style={{objectFit: "cover"}} className=""/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.apiTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.apiContent}</p>
                    </div>

                </div>
            </div>

            {/* For smaller screens */}
            <div className="w-screen my-6 flex flex-col justify-center items-center lg:hidden">
                <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFeatures}>
                    Features 
                    {down ? <ArrowDown width="4"/> : <ArrowUp />}
                </button>
            
                <div id="featuresList" className="shadow w-11/12">
                    <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                        <li>
                            <button className="featBtn" onClick={toggleFeature}>
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.customTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.customContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.colorTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.colorContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.respTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.respContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.interTitle}
                                    </h3>
                                </div>  
                                <p className="featDesc">
                                    {dictionary.Features.interContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.seoTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.seoContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.accesibTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.accesibContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.manageTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.manageContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.dbTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.dbContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.ecomTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.ecomContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.adsTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.adsContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.analTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.analContent}
                                </p>
                            </button>
                        </li>
                        <li>
                            <button className="featBtn">
                                <div className="flex items-center">
                                    <ArrowDown width="2"/>
                                    <h3 className="ml-6">
                                        {dictionary.Features.apiTitle}
                                    </h3>
                                </div>
                                <p className="featDesc">
                                    {dictionary.Features.apiContent}
                                </p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}