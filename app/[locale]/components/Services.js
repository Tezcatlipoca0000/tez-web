'use client';
import { useState } from "react";
import Image from "next/image";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import hostBG from "@/public/hostBG.jpg";
import domBG from "@/public/domBG.jpg";
import writeBG from "@/public/writeBG.jpg";
import imgBG from "@/public/imgBG.jpg";
import maintBG from "@/public/maintBG.jpg";

export default function Services({ dictionary }) {
    const [services, setServices] = useState({
        list: false,
        host: true,
        dom: true,
        write: true,
        img: true,
        maint: true
    });

    const bgImages = [hostBG, domBG, writeBG, imgBG, maintBG];

    function toggleServices(e, service) {
        const newServices = {...services};
        newServices[service] = !services[service];
        setServices(newServices);
        if (service === 'list') {
            document.getElementById('serviceList').classList.toggle('hidden');
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

    const renderedServicesBig = Object.keys(dictionary.Services).map((key, idx) => {
        return (
            <div className="featCard" onClick={(e) => toggleServices(e, key)} key={`big-services-${key}`}>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} className={services[key] ? '' : 'blur-sm'} />
                </div>
                <h3 className="z-10 text-4xl">
                    {dictionary.Services[key].title}
                </h3>
                <p className="z-10 featDesc text-justify mt-5">
                    {dictionary.Services[key].content}
                </p>
            </div>     
        );
    });

    const renderedServicesSmall = Object.keys(dictionary.Services).map((key, idx) => {
        return (
            <li key={`samll-services-${key}`}>
                <button className="featBtn" onClick={(e) => toggleServices(e, key)}>
                    <div className="flex items-center">
                        {services[key] ? <ArrowDown width="2" /> : <ArrowUp width="2" />}
                        <h3 className="ml-6">
                            {dictionary.Services[key].title}
                        </h3>
                    </div>
                    <span className="featDesc">
                        {dictionary.Services[key].content}
                    </span>
                </button>
            </li>
        );
    });

    return (
        <>
            {/* For larger screens */}
            <div className="w-11/12 my-6 hidden lg:block">
                <h2>Services</h2>
                <div className="flex flex-wrap">
                    {renderedServicesBig}
                </div>
            </div>
            
            {/* For smaller screens */}
            <div className="w-screen my-6 flex flex-col justify-center items-center lg:hidden">
                <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={(e) => toggleServices(e, 'list')}>
                    <h2>Services</h2> 
                    {services["list"] ? <ArrowDown width="4" /> : <ArrowUp width="4" />}
                </button>
                <div id="serviceList" className="shadow w-11/12">
                    <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                        {renderedServicesSmall}
                    </ul>
                </div>
            </div>
        </>
    );
}