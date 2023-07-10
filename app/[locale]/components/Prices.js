'use client';
import { useState, useEffect, useCallback } from "react";

export default function Prices({ dictionary }) {
    const feats = Object.keys(dictionary.Features);
    const servs = Object.keys(dictionary.Services);
    const rows = [...feats, ...servs];
    const priceList = {};

    rows.forEach((key) => {
        priceList[key] = '--';
    });

    const [priceState, setPriceState] = useState(priceList);
    const [optionState, setOptionState] = useState('3');

    useEffect(() => {
        const defaultPrices = {...priceList};
        defaultPrices.custom = "$3,000";
        setPriceState(defaultPrices);
    },{});

    const priceTabulator = {
        custom : (option) => {
            const newPrices = {...priceState};
            if (option === "3") {
                newPrices.custom = "$3,000";
                localStorage.custom = '3';
            } else if (option === "6") {
                newPrices.custom = "$6,000";
                localStorage.custom = '6';
            } else if (option === "7") {
                newPrices.custom = "$9,000 - $12,000";
                localStorage.custom = '7';
            }
            setPriceState(newPrices);
        },
    };

    function updatePrice(e) {
        const newValue = e.target.value; 
        const key = e.target.dataset.key;
        priceTabulator[key](newValue);
    }

    const components = {
        customOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                if (option === "3") {
                    newPrices.custom = "$3,000";
                    localStorage.custom = '3';
                } else if (option === "6") {
                    newPrices.custom = "$6,000";
                    localStorage.custom = '6';
                } else if (option === "7") {
                    newPrices.custom = "$9,000 - $12,000";
                    localStorage.custom = '7';
                }
                setPriceState(newPrices);
                setOptionState(option);
            }, [select]);
            return (
                <select onChange={onChangeInput} data-key="custom" defaultValue={optionState}>
                    <option value={'3'}>
                        Up to 3 Sections
                    </option>
                    <option value={'6'}>
                        4 - 6 Sections
                    </option>
                    <option value={'7'}>
                        7 Sections or More
                    </option>
                </select>
            );
        },
        
        colorOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        respOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        interOption : () => {
            return (
                <select onChange={updatePrice} data-key="custom">
                    <option>
                        No
                    </option>
                    <option>
                        2 Languages
                    </option>
                    <option>
                        More than 2
                    </option>
                </select>
            );
        },

        seoOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        accesibOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        manageOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        dbOption : () => {
            return (
                <select onChange={updatePrice} data-key="custom">
                    <option>
                        None
                    </option>
                    <option>
                        Create and Mantain
                    </option>
                    <option>
                        Integrate
                    </option>
                </select>
            );
        },

        ecomOption : () => {
            return (
                <select onChange={updatePrice} data-key="custom">
                    <option>
                        None
                    </option>
                    <option>
                        Create and Mantain
                    </option>
                    <option>
                        Integrate
                    </option>
                </select>
            );
        },

        adsOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        analOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        apiOption : () => {
            return (
                <>
                <select onChange={updatePrice} data-key="custom">
                    <option>
                        None
                    </option>
                    <option>
                        1 or 2
                    </option>
                    <option>
                        3 or More
                    </option>
                </select>
                </>
            );
        },

        hostOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        domOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        writeOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        imgOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
                </>
            );
        },

        maintOption : () => {
            return (
                <>
                    <input type="checkbox" onChange={updatePrice} data-key="custom" />
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
                    {priceState[key]}
                </td>
            </tr>
        );
    });

    return (
        <>
        <h2>Prices:</h2>
        <table className="w-3/4 table-auto">
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

            </tfoot>
        </table>
        </>
    );
}