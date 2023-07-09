export default function Prices({ dictionary }) {

    const options = [];

    const featuresList = Object.keys(dictionary.Features).map((key, idx) => {
        return (
            <tr key={key}>
                <td>
                    {key}
                </td>
                <td>
                    option
                </td>
                <td>
                    price
                </td>
            </tr>
        );
    });

    const servicesList = Object.keys(dictionary.Services).map((key, idx) => {
        return (
            <tr key={key}>
                <td>
                    {key}
                </td>
                <td>
                    option
                </td>
                <td>
                    price
                </td>
            </tr>
        );
    });

    return (
        <>
        <h2>Prices:</h2>
        <table>
            <thead>
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
                {featuresList}
                {servicesList}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        </>
    );
}