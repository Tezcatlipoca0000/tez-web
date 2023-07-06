'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";

export default function Header({ messages }) {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const locale = segments[1]
    const route = segments.length === 2 ? 'home' : segments[2];
    const [dark, setDark] = useState(true); 

    useEffect(() => {
        // add class to current nav button
        let navEl = document.getElementById(route);
        navEl.classList.remove('navBtn');
        navEl.classList.add('activeBtn');

        // Display correct theme button
        setDark(document.documentElement.classList.contains('dark'));
    }, []);

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDark(true);
        }
    }

    function redirectLang(locale) {
        if (segments.length > 2) {
            segments.splice(0,2);
            return `/${locale === 'en' ? 'es' : 'en'}/${segments.join('/')}`;
        } else {
            return `/${locale === 'en' ? 'es' : 'en'}`;
        }
    }

    return (
        <>
            {/* For Larger Screens */}
            <header className="hidden lg:flex">
                <div className="w-full p-4 flex justify-between">

                    {/* Title: */}
                    <h1 className="italic text-4xl font-extrabold text-center p-6 h-full">
                        {`${messages.Title} ${messages.Route[route]}`} 
                    </h1>

                    {/* Nav: */}
                    <nav className="flex justify-evenly items-end p-6 h-full space-x-4">
                        <Link id="home" className="navBtn" href={`/${locale}`}>
                            {messages.Route.home}
                        </Link>
                        <Link id="work" className="navBtn" href={`/${locale}/work`}>
                            {messages.Route.work}
                        </Link>
                        <Link id="cv" className="navBtn" href={`/${locale}/cv`}>
                            {messages.Route.cv}
                        </Link>
                        <Link id="contact" className="navBtn" href={`/${locale}/contact`} >
                            {messages.Route.contact}
                        </Link>
                    </nav>
                    
                    {/* Settings: */}
                    <div className="flex justify-end items-center p-4 space-x-4">
                        {/* Lang */}
                        <Link className="p-[11px] ring-4 ring-gray-700 dark:ring-gray-200 rounded-lg" href={redirectLang(locale)}>
                            {locale === 'en' ? 'ES' : 'EN'}
                        </Link>
                        {/* Theme */}
                        <button type="button" className="h-fit ring-4 ring-gray-700 dark:ring-gray-200 rounded-lg p-[11px]" onClick={toggleTheme}>
                            {dark ? <LightIcon /> : <DarkIcon />}
                        </button>
                    </div>

                </div>
            </header>

            {/* For Smaller Screens */}
            <header className="lg:hidden">
                <div className="flex">

                </div>
            </header>
        </>
    );
}
