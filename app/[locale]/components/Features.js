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

            <button className="border rounded-lg w-full inline-flex justify-between text-2xl p-4" type="button" onClick={toggleFeatures}>
              Features 
              {down ? <ArrowDown /> : <ArrowUp />}
          </button>
          
          <div id="featuresList" className="shadow w-full">
              <ul className="py-2 text-gray-700 dark:text-gray-200 divide-y divide-current rounded-lg">
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.customTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.customContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.colorTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.colorContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.respTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.respContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.interTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.interContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.seoTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.seoContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.accesibTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.accesibContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.manageTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.manageContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.dbTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.dbContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.ecomTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.ecomContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.adsTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.adsContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.analTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.analContent}
                          </span>
                      </button>
                  </li>
                  <li>
                      <button className="featBtn">
                          {dictionary.Features.apiTitle}
                          <ArrowRight />
                          <span className="featDesc1">
                              {dictionary.Features.apiContent}
                          </span>
                      </button>
                  </li>
              </ul>
          </div>
        </div>
    );
}