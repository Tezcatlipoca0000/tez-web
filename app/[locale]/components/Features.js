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
            data = e.currentTarget.dataset.feat,
            img = document.querySelector(`[data-value="img-${data}"]`),
            down = document.querySelector(`[data-value="down-${data}"]`),
            up = document.querySelector(`[data-value="up-${data}"]`);
        desc.classList.toggle('descAppear');
        if (img) img.classList.toggle('blur-sm');
        if (down) down.classList.toggle('hidden');
        if (up) up.classList.toggle('hidden'); 
    }
// maybe Object.keys(dictionary.Features).map((key, idx) => {render featCard})
    return (
        <>
            {/* For larger screens */}
            <div className="w-11/12 my-6 hidden lg:block">
                <h2>Features</h2>
                <div className="flex flex-wrap">

                    <div className="featCard" onClick={toggleFeature} data-feat="custom">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={customBG} alt="custom design background image" fill style={{objectFit: "cover"}} data-value="img-custom"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.customTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.customContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="color">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={colorModeBG} alt="color mode background image" fill style={{objectFit: "cover"}} data-value="img-color"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.colorTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.colorContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="resp">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={responsiveBG} alt="responsive design background image" fill style={{objectFit: "cover"}} data-value="img-resp"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.respTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.respContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="inter">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={interBG} alt="internationalization background image" fill style={{objectFit: "cover"}} data-value="img-inter"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.interTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.interContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="seo">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={seoBG} alt="SEO background image" fill style={{objectFit: "cover"}} data-value="img-seo"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.seoTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.seoContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="accesib">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={accesibBG} alt="Accesibility background image" fill style={{objectFit: "cover"}} data-value="img-accesib"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.accesibTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.accesibContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="manage">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={manageBG} alt="Self-Manageable background image" fill style={{objectFit: "cover"}} data-value="img-manage"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.manageTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.manageContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="db">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={dbBG} alt="Database Administration background image" fill style={{objectFit: "cover"}} data-value="img-db"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.dbTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.dbContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="ecom">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={ecommBG} alt="Ecommerce background image" fill style={{objectFit: "cover"}} data-value="img-ecom"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.ecomTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.ecomContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="ads">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={adsBG} alt="Google Ads background image" fill style={{objectFit: "cover"}} data-value="img-ads"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.adsTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.adsContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="anal">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={analBG} alt="Google Analytics background image" fill style={{objectFit: "cover"}} data-value="img-anal"/>
                        </div>
                        <h3 className="z-10 text-4xl">{dictionary.Features.analTitle}</h3>
                        <p className="z-10 featDesc text-justify mt-5">{dictionary.Features.analContent}</p>
                    </div>

                    <div className="featCard" onClick={toggleFeature} data-feat="api">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <Image src={apiBG} alt="API Integration background image" fill style={{objectFit: "cover"}} data-value="img-api"/>
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
                    {down ? <ArrowDown props={...{width:"4", data:"down"}}/> : <ArrowUp props={...{width:"4", data:"up", class:""}} />}
                </button>
            
                <div id="featuresList" className="shadow w-11/12">
                    <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                        <li>
                            <button className="featBtn" onClick={toggleFeature} data-feat="custom">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-custom"}} />
                                    <ArrowUp props={...{width:"2", data:"up-custom", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="color">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-color"}} />
                                    <ArrowUp props={...{width:"2", data:"up-color", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="resp">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-resp"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-resp", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="inter">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-inter"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-inter", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="seo">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-seo"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-seo", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="accesib">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-accesib"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-accesib", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="manage">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-manage"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-manage", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="db">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-db"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-db", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="ecom">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-ecom"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-ecom", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="ads">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-ads"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-ads", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="anal">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-anal"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-anal", class:"hidden"}} />
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
                            <button className="featBtn" onClick={toggleFeature} data-feat="api">
                                <div className="flex items-center">
                                    <ArrowDown props={...{width:"2", data:"down-api"}}/>
                                    <ArrowUp props={...{width:"2", data:"up-api", class:"hidden"}} />
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