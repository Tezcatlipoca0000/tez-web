'use client';
import { useState, useEffect, useCallback } from "react";

export default function Prices({ dictionary }) {
    const feats = Object.keys(dictionary.Features);
    const servs = Object.keys(dictionary.Services);
    const rows = [...feats, ...servs];
    const keyList = {};

    rows.forEach((key) => keyList[key] = '--');

    const [priceState, setPriceState] = useState(keyList);
    const [optionState, setOptionState] = useState(keyList);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const defaultPrices = {...keyList};
        const defaultOptions = {...keyList};
        defaultPrices.custom = 3000;
        defaultPrices.host = 2000;
        defaultPrices.dom = 800;
        defaultOptions.custom = '0';
        defaultOptions.color = false;
        defaultOptions.resp = false;
        defaultOptions.inter = '0';
        defaultOptions.seo = false;
        defaultOptions.accesib = false;
        defaultOptions.manage = false;
        defaultOptions.db = '0';
        defaultOptions.ecom = '0';
        defaultOptions.ads = false;
        defaultOptions.anal = false;
        defaultOptions.api = '0';
        defaultOptions.host = true;
        defaultOptions.dom = true;
        defaultOptions.write = false;
        defaultOptions.img = false;
        defaultOptions.maint = false;
        setPriceState(defaultPrices);
        setOptionState(defaultOptions);
        setTotal(5800);
    },[]);

    const defaultPrices = {
        custom: [3000, 6000, [9000, 12000]],
        color: 900,
        resp: 1200,
        inter: [0, 1000, [2000, 4000]],
        seo: 1900,
        accesib: 900,
        manage: 1900,
        db: [0, 1900, [1900, 3900]],
        ecom: [0, 1900, [1900, 3900]],
        ads: 1400,
        anal: 1400,
        api: [0, 1900, [1900, 3900]],
        host: 2000,
        dom: 800,
        write: 1400,
        img: 2400,
        maint: 1900
    }

    function priceTabulator (e) {
        const option = e.target.checked == undefined ? e.target.value : e.target.checked;
        const key = e.target.dataset.key;
        const newPrices = {...priceState};
        const newOptions = {...optionState};
        if (option === "0") {
            newPrices[key] = defaultPrices[key][0];
            newOptions[key] = '0';
        } else if (option === "1") {
            newPrices[key] = defaultPrices[key][1];
            newOptions[key] = '1';
        } else if (option === "2") {
            newPrices[key] = defaultPrices[key][2];
            newOptions[key] = '2';
        } else if (option === true) {
            newPrices[key] = defaultPrices[key];
            newOptions[key] = true;
        } else if (option === false) {
            newPrices[key] = "--";
            newOptions[key] = false;
        } 
        setPriceState(newPrices);
        setOptionState(newOptions);
    }

    const components = {
        customOption : () => {
            return (
                <select onChange={priceTabulator} data-key={'custom'} defaultValue={optionState.custom}>
                    <option value={'0'}>
                        Up to 3 Sections
                    </option>
                    <option value={'1'}>
                        4 - 6 Sections
                    </option>
                    <option value={'2'}>
                        7 Sections or More
                    </option>
                </select>
            );
        },
        
        colorOption : () => {
            return (
                <>
                    <input type="checkbox" data-key={'color'} onChange={priceTabulator} checked={optionState.color} />
                </>
            );
        },

        respOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'resp'} checked={optionState.resp} />
                </>
            );
        },

        interOption : () => {
            return (
                <select  onChange={priceTabulator} data-key={'inter'} defaultValue={optionState.inter}>
                    <option value={"0"}>
                        No
                    </option>
                    <option value={"2"}>
                        2 Languages
                    </option>
                    <option value={"3"}>
                        More than 2
                    </option>
                </select>
            );
        },

        seoOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'seo'} checked={optionState.seo} />
                </>
            );
        },

        accesibOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'accesib'} checked={optionState.accesib} />
                </>
            );
        },

        manageOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'manage'} checked={optionState.manage} />
                </>
            );
        },

        dbOption : () => {
            return (
                <select  onChange={priceTabulator} data-key={'db'} defaultValue={optionState.db}>
                    <option value={"0"}>
                        None
                    </option>
                    <option value={"1"}>
                        Create and Mantain
                    </option>
                    <option value={"2"}>
                        Integrate
                    </option>
                </select>
            );
        },

        ecomOption : () => {
            return (
                <select  onChange={priceTabulator} data-key={'ecom'} defaultValue={optionState.ecom}>
                    <option value={"0"}>
                        None
                    </option>
                    <option value={"1"}>
                        Create and Mantain
                    </option>
                    <option value={"2"}>
                        Integrate
                    </option>
                </select>
            );
        },

        adsOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'ads'} checked={optionState.ads} />
                </>
            );
        },

        analOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'anal'} checked={optionState.anal} />
                </>
            );
        },

        apiOption : () => {
            return (
                <>
                <select  onChange={priceTabulator} data-key={'api'} defaultValue={optionState.api}>
                    <option value={"0"}>
                        None
                    </option>
                    <option value={"1"}>
                        1 or 2
                    </option>
                    <option value={"2"}>
                        3 or More
                    </option>
                </select>
                </>
            );
        },

        hostOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'host'} checked={optionState.host} />
                </>
            );
        },

        domOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'dom'} checked={optionState.dom} />
                </>
            );
        },

        writeOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'write'} checked={optionState.write} />
                </>
            );
        },

        imgOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'img'} checked={optionState.img} />
                </>
            );
        },

        maintOption : () => {
            return (
                <>
                    <input type="checkbox"  onChange={priceTabulator} data-key={'maint'} checked={optionState.maint} />
                </>
            );
        },
    };

    const options = [<components.customOption />, <components.colorOption />, <components.respOption />, <components.interOption />, <components.seoOption />, <components.accesibOption />, <components.manageOption />, <components.dbOption />, <components.ecomOption />, <components.adsOption />, <components.analOption />, <components.apiOption />, <components.hostOption />, <components.domOption />, <components.writeOption />, <components.imgOption />, <components.maintOption />];

    const nameList = [
        "Custom Design",
        "Dark & Light Mode",
        "Responsive Design",
        "Internationalization",
        "Serch Engine Optimization",
        "Accessibility",
        "Self-Management",
        "Database Management",
        "E-Commerce Creation & Integration",
        "Google Ads",
        "Google Analytics",
        "API Integration",
        "Hosting Services",
        "Domain Reservation",
        "CopyWrite",
        "Image Licencing",
        "Site Maintanence"

    ];
    
    const bodyRows = rows.map((key, idx) => {
        return (
            <tr key={key} className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <td className="border text-center p-4">
                    {nameList[idx]}
                </td>
                <td className="border text-center p-4">
                    {options[idx]}
                </td>
                <td className="border text-center p-4">
                    {Array.isArray(priceState[key]) ? `$${priceState[key][0]} - $${priceState[key][1]}` : `$${priceState[key]}`}
                </td>
            </tr>
        );
    });

    return (
        <>
            <h2>
                Prices:
            </h2>
            <table className="w-3/4 table-auto mb-14">
                <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th>
                            Feature / Service
                        </th>
                        <th>
                            Option
                        </th>
                        <th>
                            Aprox.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {bodyRows}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            Total:
                        </td>
                        <td>
                            {`$${total}`}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}