'use client';
import { useState, useEffect, useContext, createContext } from "react";

const OptionsContext = createContext();

export default function Prices({ dictionary }) {

    const rows = Object.keys(dictionary.Products);
    const keyList = {};

    rows.forEach((key) => keyList[key] = '--');

    const [priceState, setPriceState] = useState(keyList);
    const [optionState, setOptionState] = useState(keyList);
    const [total, setTotal] = useState(0);

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
                <select className="bg-white dark:bg-slate-950 text-center" onChange={priceTabulator} data-key={'custom'} defaultValue={optionState.custom}>
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
                <select className='bg-white dark:bg-slate-950 text-center' onChange={priceTabulator} data-key={'inter'} defaultValue={optionState.inter}>
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
                <select className='bg-white dark:bg-slate-950 text-center' onChange={priceTabulator} data-key={'db'} defaultValue={optionState.db}>
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
                <select className='bg-white dark:bg-slate-950 text-center' onChange={priceTabulator} data-key={'ecom'} defaultValue={optionState.ecom}>
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
                <select className='bg-white dark:bg-slate-950 text-center' onChange={priceTabulator} data-key={'api'} defaultValue={optionState.api}>
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

    const options = [
        <components.customOption />, 
        <components.colorOption />, 
        <components.respOption />, 
        <components.interOption />, 
        <components.seoOption />, 
        <components.accesibOption />, 
        <components.manageOption />, 
        <components.dbOption />, 
        <components.ecomOption />, 
        <components.adsOption />, 
        <components.analOption />, 
        <components.apiOption />, 
        <components.hostOption />, 
        <components.domOption />, 
        <components.writeOption />, 
        <components.imgOption />, 
        <components.maintOption />
    ];

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
                    <tr className="bg-slate-300 dark:bg-gray-800 dark:border-gray-700">
                        <td colSpan={2} className="border text-center p-4">
                            Total:
                        </td>
                        <td className="border text-center p-4">
                            {typeof(total) === 'number' ? `$${total}` : `$${total[0]} - $${total[1]}`}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <OptionsContext.Provider value={{...optionState}}>
                <Contact dictionary={dictionary} />
            </OptionsContext.Provider>
        </>
    );
}

const Contact = ({ dictionary }) => {

    let context = useContext(OptionsContext); 
    const [autoBtn, setAutoBtn] = useState(true);
    
    const renderedOptions = Object.keys(context).map((key) => {
       if (context[key] === true) {
            return (
                <li key={key}>
                    {dictionary.Products[key].title}
                </li>
            );
        }
        else if (key === 'custom' || (key != 'custom' && (context[key] == '1' || context[key] == '2'))) {
            return (
                <li key={key}>
                    {`${dictionary.Products[key].title} - ${dictionary.Prices.options[key][(Number(context[key]))]}`}
                </li>
            );
        }
    });

    function toggleMsg(e) {
        e.preventDefault();
        let list = document.getElementById('autoList');
        list.classList.toggle('line-through');
        setAutoBtn(!autoBtn);
    }

    async function sendMsg(e) {
        e.preventDefault();
        let data = {
            "email": e.target.elements.userEmail.value,
            "msg": e.target.elements.userMsg.value,
            "list": document.getElementById('autoList').outerHTML
        };
        const res = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        //console.log(res);
        if (res.ok) {
            alert(dictionary.Contact.alertOk);
            console.log('response ok!');
        }
        else {
            alert(dictionary.Contact.alertNotOk);
            console.log('Prices sendMsg response not ok ------> ', res);
        }
    }

    return (
        <div className="w-10/12 my-14">
            <h2>
                {dictionary.Contact.title}
            </h2>
            <form className="p-4 bg-slate-600 border" onSubmit={sendMsg}>
                <div className="w-5/12 flex justify-center items-center border mb-6">
                    <label className="w-4/12 text-center" htmlFor="userEmail">
                        {`${dictionary.Contact.email}:`}
                    </label>
                    <input id="userEmail" className="w-full bg-slate-100" required name="userEmail" type="email" />
                </div>
                <div className="flex justify-between">
                    <textarea className="w-[49%] h-72 border bg-slate-100" placeholder={`${dictionary.Contact.msgPlace}`} name="userMsg" />
                    <div className="relative w-[49%] h-72 border bg-slate-100">
                        <div className="w-full bg-slate-400">
                            {dictionary.Contact.autoTitle}
                        </div>
                        <ul id="autoList" className="text-gray-500">
                            {renderedOptions}
                        </ul>
                        <button className="absolute right-5 bottom-5 border p-2 bg-sky-200" onClick={toggleMsg}>
                            {autoBtn ? `${dictionary.Contact.autoBtnOn}` : `${dictionary.Contact.autoBtnOff}`}
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-end mr-4 mt-3">
                    <button className="border px-2 py-1 bg-sky-200" type="submit">
                        {dictionary.Contact.sendBtn}
                    </button>
                </div>
            </form>
        </div>
    );
}