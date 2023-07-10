'use client';
import { useState, useEffect, useCallback } from "react";

export default function Prices({ dictionary }) {
    const feats = Object.keys(dictionary.Features);
    const servs = Object.keys(dictionary.Services);
    const rows = [...feats, ...servs];
    const keyList = {};

    rows.forEach((key) => {
        keyList[key] = '--';
    });

    const [priceState, setPriceState] = useState(keyList);
    const [optionState, setOptionState] = useState(keyList);

    useEffect(() => {
        const defaultPrices = {...keyList};
        const defaultOptions = {...keyList};
        defaultPrices.custom = "$3,000";
        defaultOptions.custom = '3';
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
        defaultOptions.host = false;
        defaultOptions.dom = false;
        defaultOptions.write = false;
        defaultOptions.img = false;
        defaultOptions.maint = false;
        setPriceState(defaultPrices);
        setOptionState(defaultOptions);
    },{});

    const components = {
        customOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === "3") {
                    newPrices.custom = "$3,000";
                    newOptions.custom = '3';
                } else if (option === "6") {
                    newPrices.custom = "$6,000";
                    newOptions.custom = '6';
                } else if (option === "7") {
                    newPrices.custom = "$9,000 - $12,000";
                    newOptions.custom = '7';
                }
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.custom]);
            return (
                <select onChange={onChangeInput} defaultValue={optionState.custom}>
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
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.color = "$900";
                    newOptions.color = true;
                } else if (option === false) {
                    newPrices.color = "--";
                    newOptions.color = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.color]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.color} />
                </>
            );
        },

        respOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.resp = "$1,200";
                    newOptions.resp = true;
                } else if (option === false) {
                    newPrices.resp = "--";
                    newOptions.resp = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.resp]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.resp} />
                </>
            );
        },

        interOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === "0") {
                    newPrices.inter = "--";
                    newOptions.inter = '0';
                } else if (option === "2") {
                    newPrices.inter = "$1,000";
                    newOptions.inter = '2';
                } else if (option === "3") {
                    newPrices.inter = "$2,000 - $4,000";
                    newOptions.inter = '3';
                }
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.inter]);
            return (
                <select onChange={onChangeInput} defaultValue={optionState.inter}>
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
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.seo = "$1,900";
                    newOptions.seo = true;
                } else if (option === false) {
                    newPrices.seo = "--";
                    newOptions.seo = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.seo]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.seo} />
                </>
            );
        },

        accesibOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.accesib = "$900";
                    newOptions.accesib = true;
                } else if (option === false) {
                    newPrices.accesib = "--";
                    newOptions.accesib = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.accesib]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.accesib} />
                </>
            );
        },

        manageOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.manage = "1,900";
                    newOptions.manage = true;
                } else if (option === false) {
                    newPrices.manage = "--";
                    newOptions.manage = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.manage]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.manage} />
                </>
            );
        },

        dbOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === "0") {
                    newPrices.db = "--";
                    newOptions.db = '0';
                } else if (option === "1") {
                    newPrices.db = "$1,900";
                    newOptions.db = '1';
                } else if (option === "2") {
                    newPrices.db = "$1,900 - $3,900";
                    newOptions.db = '2';
                }
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.db]);
            return (
                <select onChange={onChangeInput} defaultValue={optionState.db}>
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
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === "0") {
                    newPrices.ecom = "--";
                    newOptions.ecom = '0';
                } else if (option === "1") {
                    newPrices.ecom = "$1,900";
                    newOptions.ecom = '1';
                } else if (option === "2") {
                    newPrices.ecom = "$1,900 - $3,900";
                    newOptions.ecom = '2';
                }
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.ecom]);
            return (
                <select onChange={onChangeInput} defaultValue={optionState.ecom}>
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
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.ads = "1,400";
                    newOptions.ads = true;
                } else if (option === false) {
                    newPrices.ads = "--";
                    newOptions.ads = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.ads]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.ads} />
                </>
            );
        },

        analOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.anal = "1,400";
                    newOptions.anal = true;
                } else if (option === false) {
                    newPrices.anal = "--";
                    newOptions.anal = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.anal]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.anal} />
                </>
            );
        },

        apiOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.value;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === "0") {
                    newPrices.api = "--";
                    newOptions.api = '0';
                } else if (option === "1") {
                    newPrices.api = "$1,900";
                    newOptions.api = '1';
                } else if (option === "2") {
                    newPrices.api = "$1,900 - $3,900";
                    newOptions.api = '2';
                }
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.api]);
            return (
                <>
                <select onChange={onChangeInput} defaultValue={optionState.api}>
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
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.host = "$2,000 / Year";
                    newOptions.host = true;
                } else if (option === false) {
                    newPrices.host = "--";
                    newOptions.host = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.host]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.host} />
                </>
            );
        },

        domOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.dom = "$800 / Year";
                    newOptions.dom = true;
                } else if (option === false) {
                    newPrices.dom = "--";
                    newOptions.dom = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.dom]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.dom} />
                </>
            );
        },

        writeOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.write = "1,400";
                    newOptions.write = true;
                } else if (option === false) {
                    newPrices.write = "--";
                    newOptions.write = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.write]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.write} />
                </>
            );
        },

        imgOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.img = "2,400";
                    newOptions.img = true;
                } else if (option === false) {
                    newPrices.img = "--";
                    newOptions.img = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.img]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.img} />
                </>
            );
        },

        maintOption : () => {
            const onChangeInput = useCallback((e) => {
                const option = e.target.checked;
                const newPrices = {...priceState};
                const newOptions = {...optionState};
                if (option === true) {
                    newPrices.maint = "1,900 / Year";
                    newOptions.maint = true;
                } else if (option === false) {
                    newPrices.maint = "--";
                    newOptions.maint = false;
                } 
                setPriceState(newPrices);
                setOptionState(newOptions);
            }, [optionState.maint]);
            return (
                <>
                    <input type="checkbox" onChange={onChangeInput} checked={optionState.maint} />
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