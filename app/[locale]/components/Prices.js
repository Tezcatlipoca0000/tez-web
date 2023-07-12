'use client';
import { useState, useEffect } from "react";

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
        const defaultPrice = {...keyList};
        const defaultOptions = {...keyList};
        defaultPrice.custom = defaultPrices.custom[0];
        defaultPrice.host = defaultPrices.host;
        defaultPrice.dom = defaultPrices.dom;
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
        setPriceState(defaultPrice);
        setOptionState(defaultOptions);
        setTotal(4500);
    },[]);

    const defaultPrices = {
        custom: [3000, 5000, [7000, 12000]],
        color: 750,
        resp: 900,
        inter: [0, 1000, [2000, 4000]],
        seo: 1450,
        accesib: 900,
        manage: 1450,
        db: [0, 1450, [1450, 3900]],
        ecom: [0, 1450, [1450, 3900]],
        ads: 1450,
        anal: 1450,
        api: [0, 1450, [1450, 3900]],
        host: 1000,
        dom: 500,
        write: 1450,
        img: 2900,
        maint: 1450
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
        let min = 0,
            max = 0;
        Object.keys(newPrices).forEach((key) => {
            if (typeof(newPrices[key]) === 'number') {
                min += newPrices[key];
                max += newPrices[key];
            } else if (Array.isArray(newPrices[key])) {
                min += newPrices[key][0];
                max += newPrices[key][1];
            }
        });
        if (min === max) {
            setTotal(min);
        } else {
            setTotal([min, max]);
        }
    }

    const components = {
        customOption : () => {
            return (
                <select className="bg-white" onChange={priceTabulator} data-key={'custom'} defaultValue={optionState.custom}>
                    <option value={'0'}>
                        {dictionary.Prices.options.custom[0]}
                    </option>
                    <option value={'1'}>
                        {dictionary.Prices.options.custom[1]}
                    </option>
                    <option value={'2'}>
                        {dictionary.Prices.options.custom[2]}
                    </option>
                </select>
            );
        },
        
        colorOption : () => {
            return (
                <>
                    <input className="" type="checkbox" data-key={'color'} onChange={priceTabulator} checked={optionState.color} />
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
                        {dictionary.Prices.options.inter[0]}
                    </option>
                    <option value={"2"}>
                        {dictionary.Prices.options.inter[1]}
                    </option>
                    <option value={"3"}>
                        {dictionary.Prices.options.inter[2]}
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
                        {dictionary.Prices.options.db[0]}
                    </option>
                    <option value={"1"}>
                        {dictionary.Prices.options.db[1]}
                    </option>
                    <option value={"2"}>
                        {dictionary.Prices.options.db[2]}
                    </option>
                </select>
            );
        },

        ecomOption : () => {
            return (
                <select  onChange={priceTabulator} data-key={'ecom'} defaultValue={optionState.ecom}>
                    <option value={"0"}>
                        {dictionary.Prices.options.db[0]}
                    </option>
                    <option value={"1"}>
                        {dictionary.Prices.options.db[1]}
                    </option>
                    <option value={"2"}>
                        {dictionary.Prices.options.db[2]}
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
                        {dictionary.Prices.options.api[0]}
                    </option>
                    <option value={"1"}>
                        {dictionary.Prices.options.api[1]}
                    </option>
                    <option value={"2"}>
                        {dictionary.Prices.options.api[2]}
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

    const nameList = [...dictionary.Prices.names];
    
    const bodyRows = rows.map((key, idx) => {
        return (
            <tr key={key} className="bg-slate-300 dark:bg-gray-800 dark:border-gray-700">
                <td className="border text-center p-4">
                    {nameList[idx]}
                </td>
                <td className="border text-center p-4">
                    {options[idx]}
                </td>
                <td className="border text-center p-4">
                    {
                    (key === 'maint' || key === 'host' || key === 'dom') && (priceState[key] != 0 && priceState[key] != '--') ? `$${priceState[key]} / ${dictionary.Prices.rate}` 
                    : Array.isArray(priceState[key]) ? `$${priceState[key][0]} - $${priceState[key][1]}` 
                    : (priceState[key] == 0 || priceState[key] == '--') ? '--' 
                    : `$${priceState[key]}`
                    }
                </td>
            </tr>
        );
    });

    return (
        <>
            <h2>
                {dictionary.Prices.title}
            </h2>
            <table className="w-3/4 table-auto mb-14">
                <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th>
                            {dictionary.Prices.th[0]}
                        </th>
                        <th>
                            {dictionary.Prices.th[1]}
                        </th>
                        <th>
                            {dictionary.Prices.th[2]}
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
                            {typeof(total) === 'number' ? `$${total}` : `$${total[0]} - $${total[1]}`}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}