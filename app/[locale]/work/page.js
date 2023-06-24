import Header from "../components/Header";
import { getDictionary } from "@/get-dictionary";

export default async function Work({ params }) {
    const dictionary = await getDictionary(params.locale);
    return (
        <>
            <Header messages={dictionary} />
            this is the work route 
        </>
    );
}