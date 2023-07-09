export default function Prices({ dictionary }) {

    const components = {
        customOption : () => {
            return (
                <select>
                    <option>
                        Up to 3 Sections
                    </option>
                    <option>
                        4 - 6 Sections
                    </option>
                    <option>
                        More than 7 Sections
                    </option>
                </select>
            );
        },
        
        colorOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Dark & Light Modes</p>
                </>
            );
        },

        respOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Responsive Design</p>
                </>
            );
        },

        interOption : () => {
            return (
                <select>
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
                    <input type="checkbox" />
                    <p>Search Engine Optimization</p>
                </>
            );
        },

        accesibOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Make Your Site Accessible</p>
                </>
            );
        },

        manageOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Take Control of Your Data</p>
                </>
            );
        },

        dbOption : () => {
            return (
                <select>
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
                <select>
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
                    <input type="checkbox" />
                    <p>Use Google Ads</p>
                </>
            );
        },

        analOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Use Google Analytics</p>
                </>
            );
        },

        apiOption : () => {
            return (
                <>
                <select>
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
                    <input type="checkbox" />
                    <p>Hosting</p>
                </>
            );
        },

        domOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Domain</p>
                </>
            );
        },

        writeOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Copywrite</p>
                </>
            );
        },

        imgOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Image Licencing</p>
                </>
            );
        },

        maintOption : () => {
            return (
                <>
                    <input type="checkbox" />
                    <p>Maintenance</p>
                </>
            );
        },
    };

    const options = [<components.customOption />, <components.colorOption />, <components.respOption />, <components.interOption />, <components.seoOption />, <components.accesibOption />, <components.manageOption />, <components.dbOption />, <components.ecomOption />, <components.adsOption />, <components.analOption />, <components.apiOption />, <components.hostOption />, <components.domOption />, <components.writeOption />, <components.imgOption />, <components.maintOption />];
    const feats = Object.keys(dictionary.Features);
    const servs = Object.keys(dictionary.Services);
    const rows = [...feats, ...servs];
    const bodyRows = rows.map((key, idx) => {
        return (
            <tr key={key} className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <td className="border text-center p-4">
                    {key}
                </td>
                <td className="border text-center p-4">
                    {options[idx]}
                </td>
                <td className="border text-center p-4">
                    price
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