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
import hostBG from "@/public/hostBG.jpg";
import domBG from "@/public/domBG.jpg";
import writeBG from "@/public/writeBG.jpg";
import imgBG from "@/public/imgBG.jpg";
import maintBG from "@/public/maintBG.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Features({ dictionary }) {

    const bgImages = [customBG, colorModeBG, responsiveBG, interBG, seoBG, accesibBG, manageBG, dbBG, ecommBG, adsBG, analBG, apiBG, hostBG, domBG, writeBG, imgBG, maintBG];
    
    const [position, setPosition] = useState({
        "0": true,
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
        "10": false,
        "11": false,
        "12": false,
        "13": false,
        "14": false,
        "15": false,
        "16": false,
    });

    function prevCarousel() {
        let newPositions = {...position},
            currentPosition = 0;
        for (const key in newPositions) {
            if (newPositions[key]) {
                currentPosition = key;
                break;
            }
        }
        let newPosition = currentPosition === '0' ? `${Object.keys(dictionary.Products).length - 1}` : `${Number(currentPosition) - 1}`;
        let currentEls = document.querySelectorAll(`[data-position="${currentPosition}"]`),
            newEls = document.querySelectorAll(`[data-position="${newPosition}"]`);
        for (const currentEl of currentEls) {
            currentEl.classList.add('slideOutLeft');
            setTimeout(()=>{
                newPositions[currentPosition] = false;
                newPositions[newPosition] = true;
                setPosition(newPositions);
                currentEl.classList.remove('slideOutLeft');
                for (const newEl of newEls) {
                    newEl.classList.add('slideInLeft');
                    setTimeout(()=>{
                        newEl.classList.remove('slideInLeft');
                    },200);
                }
            },200);
        }
    }

    function nextCarousel() {
        let newPositions = {...position},
            currentPosition = 0;
        for (const key in newPositions) {
            if (newPositions[key]) {
                currentPosition = key;
                break;
            }
        }
        let newPosition = currentPosition === `${Object.keys(dictionary.Products).length - 1}` ? '0' : `${Number(currentPosition) + 1}`;
        let currentEls = document.querySelectorAll(`[data-position="${currentPosition}"]`),
            newEls = document.querySelectorAll(`[data-position="${newPosition}"]`);
        for (const currentEl of currentEls) {
            currentEl.classList.add('slideOutLeft');
            setTimeout(()=>{
                newPositions[currentPosition] = false;
                newPositions[newPosition] = true;
                setPosition(newPositions);
                currentEl.classList.remove('slideOutLeft');
                for (const newEl of newEls) {
                    newEl.classList.add('slideInLeft');
                    setTimeout(()=>{
                        newEl.classList.remove('slideInLeft');
                    },200);
                }
            },200);
        }
    }

    function gotoCarousel(e) {
        let newPositions = {...position},
            currentPosition = 0;
        for (const key in newPositions) {
            if (newPositions[key]) {
                currentPosition = key;
                break;
            }
        }
        let newPosition = e.currentTarget.dataset.goto;
        let currentEls = document.querySelectorAll(`[data-position="${currentPosition}"]`),
            newEls = document.querySelectorAll(`[data-position="${newPosition}"]`);
        for (const currentEl of currentEls) {
            currentEl.classList.add('slideOutLeft');
            setTimeout(()=>{
                newPositions[currentPosition] = false;
                newPositions[newPosition] = true;
                setPosition(newPositions);
                currentEl.classList.remove('slideOutLeft');
                for (const newEl of newEls) {
                    newEl.classList.add('slideInLeft');
                    setTimeout(()=>{
                        newEl.classList.remove('slideInLeft');
                    },200);
                }
            },200);
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextCarousel(); 
         }, 3100);
        return () => clearInterval(interval);
    }, [position]);

    const carouselItems = Object.keys(dictionary.Products).map((key, idx) => {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center" key={`carousel-${key}`}>
                <div className={`absolute top-0 left-0 w-full h-full`} data-position={`${idx}`}>
                    { position[idx] && <Image src={bgImages[idx]} alt={`${key} background image`} fill style={{objectFit: "cover"}} sizes="83vw" /> }
                </div>
                <h3 className={`z-10 text-4xl absolute top-[25%]`} data-position={`${idx}`}>
                    {position[idx] && dictionary.Products[key].title}
                </h3>
                <p className="w-1/2 z-10 text-justify absolute top-[50%]" data-position={`${idx}`}>
                    {position[idx] && dictionary.Products[key].content}
                </p>
            </div>
        );
    });

    const carouselIndicators = Object.keys(dictionary.Products).map((key, idx) => {
        return (
            <button key={`carousel-indicator-${key}`} type="button" className={`w-3 h-3 rounded-full ${position[idx] ? 'bg-white' : 'bg-white/75'} hover:bg-white`} aria-current={position[idx] ? 'true' : 'false'} aria-label={`Slide ${idx + 1}`} data-goto={`${idx}`} onClick={gotoCarousel}></button>
        );
    });

    return (
        <div className="w-10/12 h-[32rem] shadow-[inset_2px_5px_20px_#000] bg-white dark:bg-black flex justify-center items-center my-14">
            <div className="relative flex justify-center items-center w-[96%] shadow-[inset_0px_-10px_25px_#000,_0px_5px_5px_#000] bg-slate-900 h-[94%] overflow-hidden rounded-lg">

            {/* Carousel */}
            <div className="relative w-full h-full">
                {carouselItems}
            </div>

            {/* Controls */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevCarousel}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextCarousel}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

            {/* Indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {carouselIndicators}
            </div>

            </div>
        </div>  
    );
}