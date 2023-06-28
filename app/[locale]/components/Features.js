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
            <h2>Features</h2>
            <div className="flex flex-wrap">

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.customTitle}</h3>
                    <p className="featDesc">{dictionary.Features.customContent}</p>
                </div>

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.colorTitle}</h3>
                    <p className="featDesc">{dictionary.Features.colorContent}</p>
                </div>

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.respTitle}</h3>
                    <p className="featDesc">{dictionary.Features.respContent}</p>
                </div>

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.interTitle}</h3>
                    <p className="featDesc">{dictionary.Features.interContent}</p>
                </div>

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.seoTitle}</h3>
                    <p className="featDesc">{dictionary.Features.seoContent}</p>
                </div>

                <div className="featCard">
                    <h3 className="text-2xl">{dictionary.Features.accesibTitle}</h3>
                    <p className="featDesc">{dictionary.Features.accesibContent}</p>
                </div>

            </div>
        </div>
    );
}